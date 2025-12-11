const express = require("express");
const cors = require("cors");
const animalsRoute = require("./routes/animals");
const authRoute = require("./routes/auth");
const authMiddleware = require("./middlewares/auth");

const app = express();
const PORT = 80;
const HOST = '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use("/animals", animalsRoute);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Animal Adoption API Running...");
});

app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`));

