// --------------DEPENDENCIES------------------- // IMPORT AS REQUIRED TO SIMPLIFY CODE
// npm packages
const express = require("express");

// import from other files
const sequelize = require("./config/connection");

// create variable for express()
const app = express();
// PORT variable for listener
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//listener - sync sequelize to express
sequelize.sync({ force: false }).then(() => {
  //express() .listen on PORT
  app.listen(PORT, () => console.log(`Now listening`));
});
