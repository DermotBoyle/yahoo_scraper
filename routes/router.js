const yahooScraper = require("./index");

const appRouter = (app) => {
  app.get("/", (req, res) => {
    res.send("home route");
  });
  yahooScraper(app);
};

module.exports = appRouter;
