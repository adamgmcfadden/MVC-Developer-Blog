// --------------DEPENDENCIES-------------------
// npm packages
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// create variable for express()
const app = express();
// PORT variable for listener
const PORT = process.env.PORT || 3001;

// other imports
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//config session
const sess = {
  secret: "Chamber of Secrets",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
//express. use session
app.use(session(sess));

const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

// Sets Handlebars as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//other middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

//listener - sync sequelize to express
sequelize.sync({ force: false }).then(() => {
  //express() .listen on PORT
  app.listen(PORT, () => console.log(`Now listening`));
});
