const protectedRoutes = ["/orders"];

module.exports = (req, res, next) => {
  const { originalUrl } = req;

  if (!protectedRoutes.includes(originalUrl)) {
    next();
    return;
  }

  if (!req.currentUser) {
    res.status(401).json({
      errors: [
        {
          code: "UNAUTHORIZED"
        }
      ]
    });
    return;
  }

  next();
};
