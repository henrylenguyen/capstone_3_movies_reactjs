export const BASE_URL = "https://movienew.cybersoft.edu.vn/api";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y";

export const MOVIE_GROUP = "GP07";
export const TOTAL_MOVIE_PER_PAGE = 10;
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const USER_TYPE = {
  manager: "QuanTri",
  customer: "KhachHang",
};

export const USER_GROUP = "GP01";

export const RATING_LABEL = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export const NAME_REGEX = /^[A-Z\sa-z]+$/g; // Only accept string and space , not number
export const PHONE_REGEX = /^[0-9]+$/g; // Only accept number , not string

export const SIGNUP_VARIABLE = [
  "taiKhoan",
  "matKhau",
  "email",
  "soDt",
  "maNhom",
  "hoTen",
];

export const UPDATE_VARIABLE = [
  "taiKhoan",
  "matKhau",
  "email",
  "soDt",
  "maNhom",
  "hoTen",
  "maLoaiNguoiDung",
];
