const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.listen(4040, () => console.log("Server running on 4040"));
