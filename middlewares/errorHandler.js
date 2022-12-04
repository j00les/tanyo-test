function errorHandler(error, req, res, next) {
  let code = 500;
  let message = "Internal Server Error";

  if (error.name === "Unauthorized") {
    code = 401;
    message = "Invalid email/password";
  } else if (error.name === "Empty Field Email") {
    code = 401;
    message = "Email is required";
  } else if (error.name === "Empty Field Passsword") {
    code = 401;
    message = "Password is required";
  } else if (error.name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid token";
  } else if (error.name === "Not Found") {
    code = 404;
    message = "Data not found";
  } else if (error.name === "Unique Constraint") {
    code = 400;
    message = "Email must be unique";
  }

  res.status(code).json({
    message,
  });
  next();
}

module.exports = errorHandler;
