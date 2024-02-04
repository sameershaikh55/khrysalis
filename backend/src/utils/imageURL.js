const imageURL = (req, path) => {
  return `${req.protocol}://${req.get("host")}/public/${path}/`;
};

module.exports = imageURL;
