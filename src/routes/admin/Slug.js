import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TheatersIcon from "@mui/icons-material/Theaters";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import SettingsIcon from "@mui/icons-material/Settings";
export const navList = [
  {
    id: 1,
    title: "Quản lý người dùng",
    icon: ManageAccountsIcon,
    children: [
      {
        child_id: 1,
        title_child: "Danh sách người dùng",
        to: "/admin/danh-sach/danh-sach-nguoi-dung",
      },
      {
        child_id: 2,
        title_child: "Phân quyền người dùng",
        to: "/admin/user/phan-quyen-nguoi-dung",
      },
    ],
  },
  {
    id: 2,
    title: "Quản lý đặt vé",
    icon: ConfirmationNumberIcon,
    children: [
      {
        child_id: 1,
        title_child: "Danh sách vé đã đặt",
        to: "/admin/danh-sach/danh-sach-ve-da-dat",
      },
    ],
  },
  {
    id: 3,
    title: "Quản lý phim",
    icon: TheatersIcon,
    children: [
      {
        child_id: 1,
        title_child: "Danh sách phim",
        to: "/admin/danh-sach/danh-sach-phim",
      },
      {
        child_id: 2,
        title_child: "Thêm mới phim",
        to: "/admin/phim/them-moi-phim",
      },
      {
        child_id: 3,
        title_child: "Tạo lịch chiếu",
        to: "/admin/phim/tao-lich-chieu",
      },
    ],
  },
  {
    id: 4,
    title: "Quản lý rạp chiếu phim",
    icon: TheaterComedyIcon,
    children: [
      {
        child_id: 1,
        title_child: "Danh sách phim",
        to: "/admin/danh-sach/danh-sach-phim",
      },
      {
        child_id: 2,
        title_child: "Thêm mới phim",
        to: "/admin/rap/them-moi-phim",
      },
      {
        child_id: 3,
        title_child: "Tạo lịch chiếu",
        to: "/admin/rap/tao-lich-chieu",
      },
    ],
  },
  {
    id: 5,
    title: "Cài đặt",
    icon: SettingsIcon,
    children: [
      {
        child_id: 1,
        title_child: "Cài đặt hệ thống",
        to: "/admin/cai-dat/cai-dat-he-thong",
      },
    ],
  },
];
