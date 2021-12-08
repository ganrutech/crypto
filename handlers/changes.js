const percentageChange = async (data) => {
  const result = await new Promise((resolve) => {
    let filterData = data.filter((item) => item.quote_unit === "inr");

    resolve(filterData);
  });

  return result;
};

module.exports = {
  percentageChange,
};
