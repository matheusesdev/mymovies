const express = require("express");
const bodyParser = require("body-parser");
const moviesRouteRoutes = require('./src/routes/movies');
const categoryRoutes = require('./src/routes/category');
const app = express();

app.use(bodyParser.json());


app.use('/movies', moviesRouteRoutes);
app.use('/category', categoryRoutes);


app.listen(3000, () =>{
    console.log(`Server running on http://localhost:3000`)
});