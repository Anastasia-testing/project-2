// Requiring our models and passport as we've configured it
//const db = require("../models");
const { Router } = require("express");

const api = Router();

///for now
/*
  api.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
  */
// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
/*
  api.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
 */
api.get("/api/test", function(req, res) {
  res.json("db testing for hannah ");
});
//on button click redirect
// Route for logging user out
api.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
api.get("/api/getcustomer", function(req, res) {
  // Otherwise send back the user's email and id
  // Sending back a password, even a hashed password, isn't a good idea
  res.json("here is a som string");
});
module.exports = api;
