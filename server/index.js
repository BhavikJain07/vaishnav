const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
corsOptions = {
  origin: "http://localhost:1234",
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
};

app.use(express.static("output"));
app.use(cors(corsOptions))

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
