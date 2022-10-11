function logger(req, res, next) {
  const timestap = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`${timestap} ${method} ${url}`);
  next();
}

module.exports = { logger };
