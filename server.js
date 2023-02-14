let express = require("express");
let msql2 = require("mysql2");
let sequelize = require("sequelize");
require("dotenv").config();

let app = express();
let PORT = process.env.PORT || 8080;

let db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

require("./routes/html-routes.js")(app);
require("./routes/reviews-api-routes.js")(app);
require("./routes/wine-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});