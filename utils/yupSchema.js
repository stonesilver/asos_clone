import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().email().required(),
  password: Yup.string().required(),
});
