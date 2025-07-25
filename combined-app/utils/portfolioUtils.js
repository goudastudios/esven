/**
 * Parses a currency string (e.g., "$3.2B") into a number
 * @param {string} value - The currency string to parse
 * @returns {number} - The parsed number
 */
const parseCurrency = (value) => {
  if (!value) return 0;
  
  // Remove non-numeric characters except decimal point and minus
  const numStr = value.replace(/[^0-9.-]+/g, '');
  const num = parseFloat(numStr) || 0;
  
  // Handle billion/million suffixes
  if (value.includes('B')) return num * 1000000000;
  if (value.includes('M')) return num * 1000000;
  
  return num;
};

/**
 * Parses a multiple string (e.g., "12.5x") into a number
 * @param {string} value - The multiple string to parse
 * @returns {number} - The parsed number
 */
const parseMultiple = (value) => {
  if (!value) return 0;
  return parseFloat(value.replace('x', '')) || 0;
};

/**
 * Calculates portfolio metrics from the portfolio data
 * @param {Array} portfolioData - The portfolio data array
 * @returns {Object} - Object containing the calculated metrics
 */
const calculatePortfolioMetrics = (portfolioData) => {
  if (!Array.isArray(portfolioData)) {
    throw new Error('Portfolio data must be an array');
  }

  let totalPortfolioValue = 0;
  let totalMultiples = 0;
  let exitCount = 0;
  
  portfolioData.forEach(company => {
    if (company.status === 'exit' && Array.isArray(company.metrics)) {
      const exitMetric = company.metrics.find(m => m.label === 'Exit Value');
      const multipleMetric = company.metrics.find(m => m.label === 'Multiple');
      
      if (exitMetric) {
        totalPortfolioValue += parseCurrency(exitMetric.value);
      }
      
      if (multipleMetric) {
        const multiple = parseMultiple(multipleMetric.value);
        if (multiple > 0) {
          totalMultiples += multiple;
          exitCount++;
        }
      }
    }
  });

  // Format the total portfolio value
  const formatCurrency = (value) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    }
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${value.toFixed(1)}`;
  };

  // Calculate average multiple (only for companies with valid multiples)
  const averageMultiple = exitCount > 0 ? totalMultiples / exitCount : 0;

  return {
    totalCompanies: portfolioData.length,
    successfulExits: portfolioData.filter(company => company.status === 'exit').length,
    totalPortfolioValue: formatCurrency(totalPortfolioValue),
    averageMultiple: averageMultiple > 0 ? averageMultiple.toFixed(1) + 'x' : 'N/A'
  };
};

export { calculatePortfolioMetrics };
