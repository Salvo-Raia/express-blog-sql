function notFound(req, res, next) {
  console.log("[ERROR]: 404 - Not Found");
  res.status(404).json({
    message: `Error 404- Not Found`,
    success: false,
  });
}

module.exports = notFound;
