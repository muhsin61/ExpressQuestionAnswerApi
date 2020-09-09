const register = (req, res, next) => {
  res.status(200).json({ name: "Auth home page" });
};
module.exports = {
  register,
};
