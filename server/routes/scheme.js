const express = require("express");

const {
  getSchemes,
  getScheme,
  getCategoryScheme,
  addScheme,
  updateScheme,
  deleteScheme,
  schemePhotoUpload,
} = require("../controllers/schemes");
const reviewRouter = require("./reviews");

const Scheme = require("../models/Scheme");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");
router.use("/:schemeId/reviews", reviewRouter);

router
  .route("/photo")
  .post(protect,schemePhotoUpload);

router
  .route("/")
  .get(
    advancedResults(Scheme, {
      path: "category",
      select: "catname",
    }),
    getSchemes
  )
  .post(protect, authorize("gemploye", "admin"), addScheme);

router
  .route("/:schemeId")
  .get(getScheme)
  .put(protect, authorize("gemploye", "admin"), updateScheme)
  .delete(protect,deleteScheme);

module.exports = router;
