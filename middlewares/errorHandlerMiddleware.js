function errorHandlerMiddleware(err, req, res, next) {
  res.status(500).json({
    message: `500 - Internal server error`,
    success: false,
  });
}

module.exports = errorHandlerMiddleware;
