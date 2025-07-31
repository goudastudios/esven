/**
 * Parses a currency string (e.g., "$3.2B") into a number
 * @param {string} value - The currency string to parse
 * @returns {number} - The parsed number
 */
const parseCurrency = (value) => {
  if (!value) return 0;

  // Remove non-numeric characters except decimal point and minus
  const numStr = value.replace(/[^0-9.-]+/g, "");
  const num = parseFloat(numStr) || 0;

  // Handle billion/million suffixes
  if (value.includes("B")) return num * 1000000000;
  if (value.includes("M")) return num * 1000000;

  return num;
};

/**
 * Calculates portfolio metrics from the portfolio data
 * @param {Array} portfolioData - The portfolio data array
 * @returns {Object} - Object containing the calculated metrics
 */
const calculatePortfolioMetrics = (portfolioData) => {
  if (!Array.isArray(portfolioData)) {
    throw new Error("Portfolio data must be an array");
  }

  let totalPortfolioValue = 0;

  // Calculate total portfolio value
  portfolioData.forEach((company) => {
    if (Array.isArray(company.metrics)) {
      const valueMetric = company.metrics.find(
        (m) => m.label && m.label.toLowerCase() === "value"
      );
      if (valueMetric && valueMetric.value) {
        const parsed = parseCurrency(valueMetric.value);
        // Optional: Debug log
        // console.log(`Parsing value for ${company.name}: raw="${valueMetric.value}", parsed=${parsed}`);
        totalPortfolioValue += parsed;
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

  return {
    totalCompanies: portfolioData.length,
    successfulExits: portfolioData.filter(
      (company) => company.status && company.status.toLowerCase() === "exit"
    ).length,
    totalPortfolioValue: formatCurrency(totalPortfolioValue),
  };
};

export { calculatePortfolioMetrics };
