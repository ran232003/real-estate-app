const Estate = require("../models/EstateSchema");
const MyError = require("../models/MyError");

const createEstate2 = async (req, res, next) => {
  console.log("createEstate", req.body, req.files);
  return res.json({ status: "ok" });
};
const searchEstates = async (req, res, next) => {
  console.log("searchEstates", req.query);
  try {
    const { search, offer, rentSell, rent, sell, furnished, parking, select } =
      req.query;
    const query = {};

    if (search) {
      query.name = { $regex: new RegExp(search, "i") };
    }

    if (offer !== undefined) {
      query.offer = offer === "true";
    }

    if (rentSell !== undefined) {
      if (rentSell === "true") {
        query.$or = [{ rent: true }, { sell: true }];
      }
    }

    if (rent !== undefined) {
      query.rent = rent === "true";
    }

    if (sell !== undefined) {
      query.sell = sell === "true";
    }

    if (furnished !== undefined) {
      query.furnished = furnished === "true";
    }

    if (parking !== undefined) {
      query.parking = parking === "true";
    }
    console.log(query);
    const estates = await Estate.find(query);
    console.log(estates);

    return res.json({ status: "ok", estates });
  } catch (error) {
    console.log(error);
    const err = new MyError("Somthing Went Wrong", 500);
    return next(err);
  }
};
const getEstates = async (req, res, next) => {
  console.log("getEstates");
  try {
    const estates = await Estate.find({});
    return res.json({ status: "ok", estates });
  } catch (error) {
    console.log(error);
    const err = new MyError("Somthing Went Wrong", 500);
    return next(err);
  }
};
const createEstate = async (req, res, next) => {
  try {
    console.log("createEstate", req.body, req.files);
    const {
      userId,
      price,
      beds,
      discount,
      baths,
      offer,
      furnished,
      parking,
      rent,
      sell,
      address,
      name,
      description,
    } = req.body;
    let images = [];
    if (Array.isArray(req.files)) {
      images = req.files.map((image) => {
        let imagePath =
          "http://localhost:5000/" + image.path.replace(/\\/g, "/");
        return imagePath;
      });
    }
    const estate = new Estate({
      userId,
      price,
      beds,
      discount,
      baths,
      offer,
      furnished,
      parking,
      rent,
      sell,
      address,
      name,
      description,
      images,
    });
    await estate.save();
    const estates = await Estate.find({});
    return res.json({ status: "ok", estate, estates, msg: "Estate Created" });
  } catch (error) {
    console.log(error);
    const err = new MyError("Somthing Went Wrong", 500);
    return next(err);
  }
};
module.exports = {
  createEstate,
  createEstate2,
  getEstates,
  searchEstates,
};
