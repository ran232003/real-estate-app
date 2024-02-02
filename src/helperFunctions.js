import * as Yup from "yup";

export const createValidationSchema = (status) => {
  console.log(status);
  return status === "login"
    ? Yup.object().shape({
        email: Yup.string()
          .required("Email Required")
          .min(4, "Min number is 4")
          .max(20, "Max number of chars is 20")
          .email("Not Valid Email"),
        password: Yup.string()
          .required("Password Required")
          .min(6, "Min number is 6")
          .max(20, "Max number of chars is 20"),
      })
    : Yup.object().shape({
        name: Yup.string()
          .required("Name Required")
          .min(4, "Min number is 4")
          .max(20, "Max number of chars is 20"),
        email: Yup.string()
          .required("Email Required")
          .min(4, "Min number is 4")
          .max(20, "Max number of chars is 20")
          .email("Not Valid Email"),
        password: Yup.string()
          .required("Password Required")
          .min(6, "Min number is 6")
          .max(20, "Max number of chars is 20"),
      });
};
export const createValidationSchemaBook = () => {
  Yup.object().shape({
    title: Yup.string()
      .required("Tile is Required")
      .min(2, "Min number is 4")
      .max(40, "Max number of chars is 40"),

    author: Yup.string()
      .required("Author Required")
      .min(2, "Min number is 2")
      .max(50, "Max number of chars is 50"),
    publishYear: Yup.string()
      .required("Publish Year Required")
      .min(1, "Min number is 1")
      .max(4, "Max number of chars is 4"),
  });
};
export const createValidationSchemaGeneric = (input) => {
  switch (input) {
    case "name":
      return Yup.object().shape({
        name: Yup.string()
          .required("Name is Required")
          .min(2, "Min number is 4")
          .max(40, "Max number of chars is 40"),
      });
      break;
    case "description":
      return Yup.object().shape({
        description: Yup.string()
          .required("Description is Required")
          .min(2, "Min number is 4")
          .max(80, "Max number of chars is 80"),
      });
      break;
    default:
      break;
  }
};
export const createEstateYup = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .min(2, "Min number is 4")
    .max(40, "Max number of chars is 40"),
  description: Yup.string()
    .required("email is Required")
    .min(2, "Min number is 4")
    .max(40, "Max number of chars is 40"),
  address: Yup.string().required("address is Required"),
  images: Yup.mixed().required("File is required"),
  sell: Yup.bool(),
  rent: Yup.bool(),
  parking: Yup.bool(),
  furnished: Yup.bool(),
  Offer: Yup.bool(),
  beds: Yup.number(),
  baths: Yup.number(),
  price: Yup.number(),
  discount: Yup.number(),
});
export const createEstateInitial = {
  description: "",
  images: "",
  name: "",
  address: "",
  sell: true,
  rent: false,
  parking: false,
  furnished: false,
  offer: false,
  baths: 0,
  discount: 0,
  beds: 0,
  price: 0,
};
export const createEstateInitialValues = (estate) => {
  return estate
    ? estate
    : {
        description: "",
        images: "",
        name: "",
        address: "",
        sell: true,
        rent: false,
        parking: false,
        furnished: false,
        offer: false,
        baths: 0,
        discount: 0,
        beds: 0,
        price: 0,
      };
};
export const typesCheckBox = [
  { name: "rentSell", label: "Rent & Sale" },

  { name: "sell", label: "Sell" },
  { name: "rent", label: "Rent" },

  { name: "offer", label: "Offer" },
];
export const Amenities = [
  { name: "parking", label: "Parking" },
  { name: "furnished", label: "Furnished" },
];
export const images = [
  "./David-jones-house-high-tn1.jpg",
  "./4a564d706e773446024f980f86d2c537.jpg",
  "./house-1920X1080-wallpaper-o0cunnjwb1mti9n3.jpeg",
  // Add more image URLs as needed
];
export const sortEstate = (estates) => {};
