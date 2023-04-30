import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("Please, enter the data")
    .min(2, "min 2")
    .max(16, "max 16")
    .matches(/[a-zA-Z]/, "Only letters"),
  lastName: yup
    .string()
    .required("Please, enter the data")
    .min(2, "min 2")
    .max(16, "max 16")
    .matches(/[a-zA-Z]/, "Only letters"),
  age: yup
    .string()
    .required("Please, enter the data")
    .matches(/[0-9]/, "Only numbers"),
  address: yup
    .string()
    .required("Please, enter the data"),
  phone: yup
    .string()
    .required("Please, enter the data")
});
