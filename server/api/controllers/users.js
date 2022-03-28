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

// const registerr = (req, res, next) => {
//   const users = new Users(req.body);
//   users
//     .save()
//     .then((user) => {
//       createResponse(res, user);
//     })
//     .catch((err) => {
//       error422(res, err);
//       error500(
//         res,
//         err.message || "Some error occurred while creating the user."
//       );
//     });
// };

const register = (req, res, next) => {
  bcrypt.hash(req.body.Password, 10).then((hash) => {
    const users = new Users({
      UserName: req.body.UserName,
      Email: req.body.Email,
      Password: hash,
    });
    users
      .save()
      .then(() => {
        res.status(201).json({
          message: "user created successfully",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      });
  });
};

const login = (req, res, next) => {
  Users.findOne({ Email: req.body.Email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error("user not found"),
        });
      }
      bcrypt
        .compare(req.body.Password, user.Password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error("Incorrect password"),
            });
          }
          const token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });
          res.status(200).json({
            userId: user._id,
            token: "token",
            username: user.UserName,
          });
        })
        .catch((errro) => {
          res.status(500).json({
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

module.exports = {
  register,
  login,
};
