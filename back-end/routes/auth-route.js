let express = require("express");
const {
  signUp,
  login,
  updateUser,
  updateUserNoImage,
  deleteUser,
} = require("../controllers/auth-controllers");
const { checkSchema } = require("../middleware/middleware");
const upload = require("../middleware/uploadFile");
const router = express.Router();
router.post("/signup", checkSchema("signup-schema.json"), signUp);
router.post("/login", checkSchema("login-schema.json"), login);
router.post("/update-user", upload.single("file"), updateUser);
router.post("/update-user-no-image", updateUserNoImage);
router.delete("/delete-user/:userId", deleteUser);

module.exports = router;
