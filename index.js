const express = require("express");
const bodyParser = require("body-parser");
const moviesRouteRoutes = require('./src/routes/movies');
const categoryRoutes = require('./src/routes/category');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());


app.use('/movies', moviesRouteRoutes);
app.use('/category', categoryRoutes);


app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`)
});