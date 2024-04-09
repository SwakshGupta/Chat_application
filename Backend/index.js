const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8002;

// middlewares

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`server has been started at port ${PORT}`));
