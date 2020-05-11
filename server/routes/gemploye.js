const express = require("express");
const {
  getGemployes,
  getGemploye,
  createGemploye,
  updateGemploye,
  deleteGemploye,
  // getVendorsInRadius,
  gemployesPhotoUpload,
} = require("../controllers/gemploye");

const Gemploye = require("../models/Gemploye");

// Include other resource routers
const SchemesRouter = require("./scheme");
const reviewRouter = require("./reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
router.use("/:gemployeId/scheme", SchemesRouter);
router.use("/:gemployeId/reviews", reviewRouter);

// router.route("/radius/:zipcode/:distance").get(getVendorsInRadius);

router
  .route("/photo")
  .post( gemployesPhotoUpload);

router
  .route("/")
  .get(advancedResults(Gemploye, "Schemes"), getGemployes)
  .post(protect, authorize("gemploye", "admin"), createGemploye);

router
  .route("/:gemployeId")
  .get(getGemploye)
  .put(protect, authorize("gemploye", "admin"), updateGemploye)
  .delete(protect, authorize("gemploye", "admin"), deleteGemploye);

module.exports = router;
