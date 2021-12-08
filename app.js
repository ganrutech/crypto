const express = require("express");
const app = express();
const port = 1795;
const sequelize = require("./database/database");

app.use(express.json());

sequelize.sync().then(() => console.log("Database connected!!!"));

const { fetchStocks, debugStocks } = require("./api/current_stock");

app.get("/", (req, res) => {
  res.status(200).json({ status: `Server running on PORT: ${port}` });
});

app.get("/stock", fetchStocks);
app.get("/stock/debug", debugStocks);

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
