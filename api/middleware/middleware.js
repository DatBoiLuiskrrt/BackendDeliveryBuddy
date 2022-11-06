const Locations = require("../../locations/locations-model");

async function validateLocationId(req, res, next) {
  try {
    const location = await Locations.getById(req.params.id);
    if (!location) {
      next({
        message: "Location not found",
        status: 404,
      });
    } else {
      req.location = location;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: "Problem finding location by ID",
    });
  }
  next();
}

function validateLocation(req, res, next) {
  const { comments, address, dangerous } = req.body;
  if (!comments || !address) {
    res.status(400).json({
      message: "Missing required field for post to work",
    });
  } else {
    req.comments = comments.trim();
    req.address = address;
    req.dangerous = dangerous;
    next();
  }
  //   console.log("Validate post middleware");
}

module.exports = {
  validateLocationId,
  validateLocation,
};
