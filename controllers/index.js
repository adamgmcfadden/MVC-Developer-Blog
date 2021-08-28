//------Import Dependencies------
const router = require("express").Router();

//----import routes
const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");

//----middleware --- use routes
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

//export routes to server
module.exports = router;
