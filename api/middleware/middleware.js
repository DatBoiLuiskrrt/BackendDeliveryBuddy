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

module.exports = {
  validateLocationId,
};
