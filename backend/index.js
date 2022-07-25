const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/home", (req, res) => {
  res.status(200).json({ status: "Data is getting fetched from backend" });
});
app.listen(3001, () => {
  console.log("listening on 3001");
});
