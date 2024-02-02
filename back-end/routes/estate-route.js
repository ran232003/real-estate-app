let express = require("express");

const { checkSchema } = require("../middleware/middleware");
const upload = require("../middleware/uploadFile");
const {
  createEstate,
  getEstates,
  createEstate2,
  searchEstates,
} = require("../controllers/estate-controlles");
const router = express.Router();
router.post("/create-estate", upload.array("files", 10), createEstate);
router.get("/create-estate2", createEstate2);
router.get("/get-estates", getEstates);
router.get("/search-estates", searchEstates);

module.exports = router;
