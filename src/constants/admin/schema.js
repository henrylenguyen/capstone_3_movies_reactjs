import * as yup from "yup";
import mime from "mime-types";
const schemaPhim = yup.object().shape({
  filmName: yup.string().required("Tên phim là bắt buộc"),
  imageFilm: yup
    .mixed()
    .test("fileFormat", "File must be a JPEG or PNG image", (value) => {
      if (!value) return false;
      const fileType = mime.extension(value.type);
      return ["jpg", "jpeg", "png"].includes(fileType);
    }),
});