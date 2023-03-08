import { PHONE_REGEX } from "constants/constants";
import { NAME_REGEX } from "constants/constants";
import * as yup from "yup";

export const schemaSignIn = yup.object({
  taiKhoan: yup.string().required("Vui lòng điền vào trường này!"),
  matKhau: yup.string().required("Vui lòng điền vào trường này"),
});

export const schemaSignUp = yup.object({
  taiKhoan: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .min(3, "Tài khoản phải từ 3 kí tự trở lên!"),
  matKhau: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .min(3, "Mật khẩu phải từ 3 kí tự trở lên!"),
  email: yup
    .string()
    .required("Vui lòng điền vào trường này")
    .email("Email không hợp lệ! Vui lòng nhập lại!"),
  soDt: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .test(
      "check phone number length",
      "Số điện thoại phải có 10 số!",
      (value) => value.length === 10
    )
    .matches(PHONE_REGEX, "Số điện thoại phải là số!"),
  hoTen: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .test(
      "check user name if its too short",
      "Họ tên phải có từ 2 kí tự trở lên và phải có 2 từ trở lên",
      (value) => value.split(" ").filter((item) => item.length >= 2).length >= 2
    )
    .matches(NAME_REGEX, "Họ và tên không được chứa số!"),
  retypeMatKhau: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .oneOf([yup.ref("matKhau")], "Mật khẩu nhập lại không đúng!"),
  hasAgree: yup
    .boolean()
    .oneOf([true], "Vui lòng chấp nhận Điều Khoản của MovieTheater"),
});

export const schemaUpdateUser = yup.object({
  hoTen: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .test(
      "check user name if its too short",
      "Họ tên phải có từ 2 kí tự trở lên và phải có 2 từ trở lên",
      (value) => value.split(" ").filter((item) => item.length >= 2).length >= 2
    )
    .matches(NAME_REGEX, "Họ và tên không được chứa số!"),
  soDt: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .test(
      "check phone number length",
      "Số điện thoại phải có 10 số!",
      (value) => value.length === 10
    )
    .matches(PHONE_REGEX, "Số điện thoại phải là số!"),
  matKhau: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .min(3, "Mật khẩu phải từ 3 kí tự trở lên!"),
  retypeMatKhau: yup
    .string()
    .required("Vui lòng điền vào trường này!")
    .oneOf([yup.ref("matKhau")], "Mật khẩu  nhập lại không khớp!"),
});
