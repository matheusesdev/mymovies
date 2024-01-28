const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const movieRoutes = require("./src/routes/movies");
const categoryRoutes = require("./src/routes/category");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/movies", movieRoutes);
app.use("/category", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
