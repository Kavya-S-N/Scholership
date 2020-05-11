const mongoose = require("mongoose");
// title,category,description ,lastdate,eligibility,benefitsreward,website,
const SchemeSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Please add a course description"],
  },
  lastdate: {
    type: Date,
    required: [true, "Please add a date"],
  },
  eligibility: {
    type: String,
    required: [true, "Please add a eligibility"],
  },
  benefitsreward: {
    type: String,
    required: [true, "Please add a benefits"],
  },
  // Scholershiptype: {
  //   type: String,
  //   required: [true, "Please add a type"],
  // },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      "Please use a valid URL with  http or https",
    ],
    

  },
  
  file: 
    {
      type: String,
      default: "/uploads/no-photo.jpg",
    },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  gemploye: {
    type: mongoose.Schema.ObjectId,
    ref: "Gemploye",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

// Static method to get avg of course tuitions
// SchemeSchema.statics.getAverageCost = async function (gemployeId) {
//   const obj = await this.aggregate([
//     {
//       $match: { gemploye: gemployeId },
//     },
//     {
//       $group: {
//         _id: "$gemploye",
//         averageCost: { $avg: "$tuition" },
//       },
//     },
//   ]);

//   try {
//     await this.model("Gemploye").findByIdAndUpdate(gemployeId, {
//       averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// Call getAverageCost after save
// SchemeSchema.post("save", function () {
//   this.constructor.getAverageCost(this.gemploye);
// });

// Call getAverageCost before remove
// SchemeSchema.pre("remove", function () {
//   this.constructor.getAverageCost(this.gemploye);
// });

module.exports = mongoose.model("Scheme", SchemeSchema);
