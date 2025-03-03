const { DriverStatus } = require("@/config/enum");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = mongoose.model("user", userSchema);

const userSchema = new mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    email: String,
    phoneNumber: Number,
    age: Date,
    bio: String,
    car: Object,
    availability: Boolean,
    currentLocation: {
      longitude: String,
      latitude: String,
      address: String,
    },
    Locations: [
      {
        longitude: String,
        latitude: String,
        address: String,
      },
    ],
    password: String,
    isDriverApproved: {
      type: Boolean,
      default: false,
    },
    driverStatus: {
      type: String,
      enu: Object.value(DriverStatus),
      default: DriverStatus.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

const ratingSchema = new mongoose.Schema(
  {
    driver: { type: mongoose.Schema.ObjectId.ObjectId, ref: "user" },
    passenger: { type: mongoose.Schema.ObjectId.ObjectId, ref: "user" },
    stars: Number,
    review: {
      star: Number,
      feedback: String,
    },
  },
  {
    timestamps: true,
  }
);
const rideSchema = new mongoose.Schema(
  {
    driver: { type: mongoose.Schema.ObjectId.ObjectId, ref: "user" },
    passenger: { type: mongoose.Schema.ObjectId.ObjectId, ref: "user" },
    pickupLocation: {
      longitude: String,
      latitude: String,
      address: String,
    },
    destination: {
      longitude: String,
      latitude: String,
      address: String,
    },
  },
  {
    timestamps: true,
  }
);
