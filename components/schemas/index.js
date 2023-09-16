import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string("Please enter a name").min(2).required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  message: yup.string("Please enter a message").min(2).required("Required"),
});
