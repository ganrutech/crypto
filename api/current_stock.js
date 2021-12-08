const axios = require("axios").default;
const data = require("../data/stocks.json");

const { percentageChange, checkLowStock } = require("../handlers/changes");

const apiURL = "https://api.wazirx.com/api/v2/tickers";

const fetchStocks = async (req, res) => {
  try {
    const response = await axios.get(apiURL, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      res.json(response.data);
    } else {
      throw new Error("Failed");
    }
  } catch (error) {
    error.status = 400;
    res.json({ message: error.message });
  }
};

const debugStocks = async (req, res) => {
  const result = await percentageChange(Object.values(data));
  const lowStocks = await checkLowStock(result);
  res.json(lowStocks);
};

module.exports = {
  fetchStocks,
  debugStocks,
};
