let db = require("../models");

module.exports = function (app) {
  app.get("/api/wineries", function (req, res) {
    db.Winery.findAll({}).then(function (dbWinery) {
      res.json(dbWinery);
    });
  });

  app.get("/api/Varietal", function (req, res) {
    db.Varietal.findAll({}).then(function (dbVarietal) {
      res.json(dbVarietal);
    });
  });

  app.get("/api/wineries/:id", function (req, res) {
    db.Winery.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (dbWinery) {
      res.json(dbWinery);
    });
  });

  app.get("/api/varietals/:id", function (req, res) {
    db.Varietal.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (dbWinery) {
      res.json(dbWinery);
    });
  });

  app.post("/api/wineries", function (req, res) {
    db.Brand.create(req.body).then(function (dbWinery) {
      res.json(dbWinery);
    });
  });

  app.post("/api/varietals", function (req, res) {
    db.Flavor.create(req.body).then(function (dbVarietal) {
      res.json(dbVarietal);
    });
  });

  app.delete("/api/wineries/:id", function (req, res) {
    db.Winery.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbWinery) {
      res.json(dbWinery);
    });
  });

  app.delete("/api/varietals/:id", function (req, res) {
    db.Varietal.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbVarietal) {
      res.json(dbVarietal);
    });
  });
};