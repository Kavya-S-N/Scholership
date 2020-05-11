const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const geocoder = require("../utils/geocoder");
const Gemploye = require("../models/Gemploye");

// @desc      Get all vendors
// @route     GET /api/v1/vendors
// @access    Public
exports.getGemployes = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single vendor
// @route     GET /api/v1/vendors/:vendorId
// @access    Public
exports.getGemploye = asyncHandler(async (req, res, next) => {
  const gemploye = await Gemploye.find({user:req.params.gemployeId});

  if (!gemploye) {
    return next(
      new ErrorResponse(
        `gemploye not found with id of ${req.params.gemployeId}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: gemploye });
});

// @desc      Create new gemploye
// @route     POST /api/v1/gemploye
// @access    Private
exports.createGemploye = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // Check for published vendor
  const publishedgemploye = await Gemploye.findOne({ user: req.user.id });

  // If the user is not an admin,they can only add one vendor
  if (publishedgemploye && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already  a gemploye`,
        400
      )
    );
  }

  const gemploye = await Gemploye.create(req.body);

  res.status(201).json({
    success: true,
    data: gemploye,
  });
});

// @desc      Update vendor
// @route     PUT /api/v1/gemploye/:gemployeId
// @access    Private
exports.updateGemploye = asyncHandler(async (req, res, next) => {
  let gemploye = await Gemploye.findById(req.params.gemployeId);

  if (!gemploye) {
    return next(
      new ErrorResponse(
        `Gemploye not found with id of ${req.params.gemployeId}`,
        404
      )
    );
  }

  // Make sure user is vendor owner
  if (gemploye.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.gemployeId} is not authorized to update this gemploye`,
        401
      )
    );
  }

  gemploye = await Gemploye.findByIdAndUpdate(req.params.gemployeId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: gemploye });
});

// @desc      Delete vendor
// @route     DELETE /api/v1/vendor/:vendorId
// @access    Private
exports.deleteGemploye = asyncHandler(async (req, res, next) => {
  const gemploye = await Gemploye.findById(req.params.gemployeId);

  if (!gemploye) {
    return next(
      new ErrorResponse(
        `Gemploye not found with id of ${req.params.gemployeId}`,
        404
      )
    );
  }

  // Make sure user is vendor owner
  if (gemploye.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.gemployeId} is not authorized to delete this gemploye`,
        401
      )
    );
  }

  gemploye.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc      Upload photo for vendor
// @route     PUT /api/v1/vendor/:vendorId/photo
// @access    Private


exports.gemployesPhotoUpload = asyncHandler(async (req, res, next) => {
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;
  console.log(file);

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  file.mv(
    `${__dirname}/../../suchitra/public/uploads/${file.name}`,
    async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      const files = `/uploads/${file.name}`;

      res.status(200).json({
        success: true,
        data: files,
      });
    }
  );
});

