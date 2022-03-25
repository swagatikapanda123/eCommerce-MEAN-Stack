const {
  NotFoundInCatch,
  error500,
  error404,
  error422,
} = require("../lib/error");
const {
  getAllResponse,
  createResponse,
  updateResponse,
  getOneResponse,
  response,
} = require("../lib/response");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  const users = new Users(req.body);
  users
    .save()
    .then((user) => {
      createResponse(res, user);
    })
    .catch((err) => {
      error422(res, err);
      error500(
        res,
        err.message || "Some error occurred while creating the user."
      );
    });
};

// const register = (req, res, next) => {
//   bcrypt.hash(req.body.password, 10).then((hash) => {
//     const user = new Users({
//       UserName: req.body.UserName,
//       Email: req.body.Email,
//       Password: hash,
//     });
//     user
//       .save()
//       .then(() => {
//         res.status(201).json({
//           message: "user created successfully",
//         });
//       })
//       .catch((error) => {
//         res.status(500).json({
//           error: error,
//         });
//       });
//   });
// };

const login = (req, res, next) => {
  const users = new Users(req.body);
  users
    .save()
    .then((user) => {
      createResponse(res, user);
    })
    .catch((err) => {
      error422(res, err);
      error500(
        res,
        err.message || "Some error occurred while creating the user."
      );
    });
};

module.exports = {
  register,
  login,
};
