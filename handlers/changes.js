const percentageChange = (data) => {
  return new Promise((resolve) => {
    const filterData = data.filter((item) => item.quote_unit === "inr");
    resolve(filterData);
  });
};

const checkLowStock = (data) => {
  return new Promise((resolve) => {
    const filterData = data.filter(
      (item) => item.high <= item.last && item.last !== "0.0"
    );
    resolve(filterData);
  });
};

module.exports = {
  percentageChange,
  checkLowStock,
};
