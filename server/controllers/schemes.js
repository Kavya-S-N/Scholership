const path = require("path");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Schemes = require("../models/Scheme");
const Gemploye = require("../models/Gemploye");
const Category = require("../models/Category");

// @desc      Get products
// @route     GET /api/v1/products
// @route     GET /api/v1/vendors/:vendorsId/products
// @access    Public
exports.getSchemes= asyncHandler(async (req, res, next) => {
  if (req.params.gemployeId) {
    const schemes = await Schemes.find({user: req.params.gemployeId });

    return res.status(200).json({
      success: true,
      count: schemes.length,
      data: schemes,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single product
// @route     GET api/v1/vendors/:vendorsId/products/:productId
// @access    Public
exports.getScheme = asyncHandler(async (req, res, next) => {
  const scheme = await Schemes.findById(req.params.schemeId)
    .populate({
      path: "category",
    })
    .populate({ path: "gemploye" });

  if (!scheme) {
    return next(
      new ErrorResponse(`No scheme with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: scheme,
  });
});

// @desc      Add product
// @route     POST api/v1/vendors/:vendorsId/products
// @access    Private
exports.addScheme = asyncHandler(async (req, res, next) => {
  // req.body.vendor = req.params.vendorId;
  req.body.user = req.user.id;

  const gemploye = await Gemploye.findOne({ user: req.user.id });

  // if (!gemploye) {
  //   return next(
  //     new ErrorResponse(`No vendor with the id of ${req.params.gemployeId}`),
  //     404
  //   );
  // }

  // Make sure user is product owner
  if (gemploye.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to add a scheme by ${gemploye._id}`,
        401
      )
    );
  }

  const category = await Category.findById(req.body.category);
  req.body.gemploye = gemploye.id;
  req.body.catname = category.catname;
  const scheme = await Schemes.create(req.body);

  res.status(200).json({
    success: true,
    data: scheme,
  });
});

// @desc      Update product
// @route     PUT /api/v1/vendors/:vendorsId/products/:productId
// @access    Private
exports.updateScheme = asyncHandler(async (req, res, next) => {
  let scheme= await await Schemes.findById(req.params.schemeId);

  if (!scheme) {
    return next(
      new ErrorResponse(`No Scheme with the id of ${req.params.schemeId}`),
      404
    );
  }

  // Make sure user is product owner
  if (scheme.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update scheme ${scheme._id}`,
        401
      )
    );
  }

  scheme = await Schemes.findByIdAndUpdate(req.params.schemeId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: scheme,
  });
});

// @desc      Delete product
// @route     DELETE /api/v1/vendors/:vendorsId/products/:productId
// @access    Private
exports.deleteScheme = asyncHandler(async (req, res, next) => {
  const scheme = await Schemes.findById(req.params.schemeId);

  if (!scheme) {
    return next(
      new ErrorResponse(`No Product with the id of ${req.params.schemeId}`),
      404
    );
  }
  // Make sure user is product owner
  // if (scheme.user.toString() !== req.user.id && req.user.role !== "admin") {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.user.id} is not authorized to delete product ${scheme._id}`,
  //       401
  //     )
  //   );
  // }
  await scheme.remove();
  res.status(200).json({
    success: true,
    data: {},
  });
});

// // @desc      Upload photo for product
// // @route     PUT /api/v1/vendors/:vendorsId/products/:productId/photo
// // @access    Private
// exports.schemePhotoUpload = asyncHandler(async (req, res, next) => {
//   const scheme = await Schemes.findById(req.params.schemeId);

//   if (!scheme) {
//     return next(
//       new ErrorResponse(`Schemes not found with id of ${req.params.id}`, 404)
//     );
//   }

//   // Make sure user is product owner
//   if (scheme.user.toString() !== req.user.id && req.user.role !== "admin") {
//     return next(
//       new ErrorResponse(
//         `User ${req.params.id} is not authorized to update this schemes`,
//         401
//       )
//     );
//   }
//   if (!req.files) {
//     return next(new ErrorResponse(`Please upload a file`, 400));
//   }
//   let file = [];
//   for (let i = 0; i < req.files.files.length; i++) {
//     file[i] = req.files.files[i];

//     // Make sure the image is a photo
//     if (!file[i].mimetype.startsWith("image")) {
//       return next(new ErrorResponse(`Please upload an image file`, 400));
//     }

//     // Check filesize
//     if (file[i].size > process.env.MAX_FILE_UPLOAD) {
//       return next(
//         new ErrorResponse(
//           `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
//           400
//         )
//       );
//     }
//     name = file[i].name;
//     // Create custom filename
//     file[i].name = `photo_${scheme.id}${name}`;

//     file[i].mv(
//       `${process.env.FILE_UPLOAD_PATH_ITEMS}/${file[i].name}`,
//       async (err) => {
//         if (err) {
//           console.error(err);
//           return next(new ErrorResponse(`Problem with file upload`, 500));
//         }

//         console.log(file[i].name);
//       }
//     );
//   }
//   await Schemes.findByIdAndUpdate(req.params.id, {
//     photo: file,
//   });
//   res.status(200).json({
//     success: true,
//     count: req.files.files.length,
//     data: file,
//   });

//   //   res.status(200).json({
//   //     success: true,
//   //     data: file.name,
//   //   });
//   // });
// });

/////////////////////////////////////////////////////////////////////////////
exports.schemePhotoUpload = asyncHandler(async (req, res, next) => {
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
    `${__dirname}/../../frontend/public/uploads/${file.name}`,
    async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      const files = `/uploads/${file.name}`;

      res.status(200).json({
        success: true,
        data: files,
      }
      )
    
    })
  })



