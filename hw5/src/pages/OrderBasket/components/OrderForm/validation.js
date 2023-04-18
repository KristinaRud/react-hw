import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("Поле должно быть обезательным")
    .min(2, "min 2")
    .max(16, "max 16")
    .matches(/[a-zA-Z]/, "only letters"),
  LastName: yup
    .string()
    .required("Поле должно быть обезательным")
    .min(2, "min 2")
    .max(16, "max 16")
    .matches(/[a-zA-Z]/, "only letters"),
  phone: yup
    .string()
    .required("Поле должно быть обезательным")
    .min(11, "min 11")
    .max(11, "max 11")
    .matches(/[0-9]/, "only numbers"),
});
