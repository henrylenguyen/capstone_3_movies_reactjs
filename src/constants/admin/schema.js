import * as yup from "yup";
import mime from "mime-types";
const schemaPhim = yup.object().shape({
  filmName: yup.string().required("Tên phim là bắt buộc"),
  imageFilm: yup
    .mixed()
    .test("fileFormat", "Ảnh phải là JPG PNG JPEG", (value) => {
      if (!value) return false;
      const fileType = mime.extension(value.type);
      return ["jpg", "jpeg", "png"].includes(fileType);
    }),
  filmDesc: yup.string().required("Mô tả là bắt buộc"),
  filmAlias: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_-]{5,}$/,
      "Bí danh phải có ít nhất 5 ký tự, chỉ bao gồm chữ cái, số và dấu gạch dưới, không có khoảng trắng"
    ).required("Bí danh là bắt buộc"),
  urlTrailer: yup.string().url("Url không đúng định dạng").required("Trailer là bắt buộc")
});