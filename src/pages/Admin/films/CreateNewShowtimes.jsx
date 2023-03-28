import Form from "components/admin/form/Form";
import { option } from "constants/admin/optionsGroup";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLayDanhSachPhim } from "thunks/admin/movieThunks";
import { fetchThongTinCumRapTheoHeThong } from "thunks/admin/theaterThunks";
import { fetchLayThongTinHeThongRap } from "thunks/admin/theaterThunks";
import { fetchTaoLichChieu } from "thunks/admin/TicketThunks";
import * as yup from "yup";
const schema = yup
  .object()
  .shape({
    maNhom: yup.string().required("Mã nhóm là bắt buộc"),
    maPhim: yup.string().required("Phim là bắt buộc"),
    heThongRap: yup.string().required("Hệ thống rạp là bắt buộc"),
    maRap: yup.string().required("Rạp là bắt buộc"),
    date: yup.string().required("Ngày chiếu phim là bắt buộc"),
    time: yup.string().required("Giờ chiếu phim là bắt buộc"),
    giaVe: yup
      .string()
      .required("Giá vé là bắt buộc")
  })
  .required();

const CreateNewShowtimes =  () => {
  const { DanhSachPhim } = useSelector((state) => state.movieAdmin);
  const { ThongTinHeThongRap, CumRapTheoHeThong } = useSelector(
    (state) => state.theaterAdmin
  );
  const [movie, setMovie] = useState(DanhSachPhim);
  const [heThong, setHeThong] = useState(ThongTinHeThongRap);
  const [rap, setRap] = useState(CumRapTheoHeThong);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitForm = async (data) => {
    let ngayChieu = moment(data.date).format("DD/MM/YYYY");
    let gioChieu = moment(data.time).format("HH:mm:ss");
    let ngayChieuGioChieu = `${ngayChieu} ${gioChieu}`;

    const { heThongRap, maNhom, date, time, ...newData } = data;
    const dataSubmit = { ...newData, ngayChieuGioChieu };
    dataSubmit.giaVe = parseInt(data.giaVe);
    await dispatch(fetchTaoLichChieu(dataSubmit)).then(()=>{
      navigate("/admin/home")
    });
  };
  const handleChangeGroup = async (e) => {
    await dispatch(fetchLayDanhSachPhim(e.value));
  };
  const handleChangeTheater = async (e) => {
    await dispatch(fetchThongTinCumRapTheoHeThong(e.value));
  };
  useEffect(() => {
    let danhsach = DanhSachPhim?.map((item) => {
      return { value: item.maPhim, label: item.tenPhim };
    });
    setMovie(danhsach);
    dispatch(fetchLayThongTinHeThongRap());
  }, [DanhSachPhim]);

  useEffect(() => {
    let heThong = ThongTinHeThongRap?.map((item) => {
      return { value: item.maHeThongRap, label: item.tenHeThongRap };
    });
    setHeThong(heThong);
  }, [ThongTinHeThongRap]);

  useEffect(() => {
    let cumRap = CumRapTheoHeThong?.map((item) => {
      return { value: item.maCumRap, label: item.tenCumRap };
    });
    setRap(cumRap);
  }, [CumRapTheoHeThong]);

  const fields = [
    {
      label: "Mã nhóm",
      name: "maNhom",
      type: "select",
      options: option,
      onChange: handleChangeGroup,
    },
    {
      label: "Phim",
      name: "maPhim",
      type: "select",
      options: movie,
    },
    {
      label: "Hệ thống rạp",
      name: "heThongRap",
      type: "select",
      options: heThong,
      onChange: handleChangeTheater,
    },
    {
      label: "Rạp",
      name: "maRap",
      type: "select",
      options: rap,
    },
    {
      label: "Ngày chiếu phim",
      name: "date",
      type: "date",
    },
    {
      label: "Giờ chiếu phim",
      name: "time",
      type: "time",
    },
    {
      label: "Giá vé",
      name: "giaVe",
      type: "number",
      placeholder: "Giá từ 75.000 đến 200.000",
    },
  ];
  return (
    <div className="w-full">
      <Form
        schema={schema}
        fields={fields}
        handleSubmitForm={handleSubmitForm}
        title={"Tạo lịch chiếu"}
        color="text-white"
      ></Form>
    </div>
  );
};

export default CreateNewShowtimes;
