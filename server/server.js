const express = require("express");
const cors = require("cors");
const animalsRoute = require("./routes/animals");

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());
app.use("/animals", animalsRoute);

app.get("/", (req, res) => {
  res.send("Animal Adoption API Running...");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
