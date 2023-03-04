import * as yup from "yup";

export const schemaSignIn = yup.object({
  taiKhoan: yup.string().required("Vui lòng điền vào trường này!"),
  matKhau: yup.string().required("Vui lòng điền vào trường này"),
});
