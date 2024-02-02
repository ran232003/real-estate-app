const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const authRouter = require("./routes/auth-route");
const estateRouter = require("./routes/estate-route");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");

const MyError = require("./models/MyError");
console.log(__dirname);
app.use(
  "/uploads/files",
  express.static(
    "C:/MyKt/React/Real Estate App/real-estate-app/back-end/uploads/files"
  )
);

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React app's domain
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));

// mongoose.connect(
//   "mongodb+srv://ranfa:232003@cluster0.d2yn9.mongodb.net/BookStore?retryWrites=true&w=majority"
// );
mongoose.connect("mongodb://localhost:27017/RealEstate", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/api/realEstate/estate", estateRouter);

app.use("/api/realEstate/auth", authRouter);

app.use((req, res, next) => {
  let error = new MyError("not able to find page");
  error.errorCode = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  //console.log(error);
  console.log("error controller", error.message);
  const errorCode = error.code || 500;
  const errorMsg = error.message || "unknown error occurd";
  res.status(errorCode);
  res.json({ status: "fail", msg: errorMsg });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
