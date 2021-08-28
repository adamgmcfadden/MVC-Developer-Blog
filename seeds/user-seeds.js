const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "eivorRagnar",
    email: "eivor@acvalhalla.com",
    password: "password123",
  },
  {
    username: "bayek",
    email: "bayek@acorigins.com",
    password: "password123",
  },
  {
    username: "kassandra",
    email: "kassandra@acodyssey.com",
    password: "password123",
  },
  {
    username: "arthurmorgan",
    email: "arthurmorgan@rdr2.com",
    password: "password123",
  },
  {
    username: "sadieadler",
    email: "sadieadler@rdr2.com",
    password: "password123",
  },
  {
    username: "dutchvanderlind",
    email: "dutch@rdr2.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
