import React from 'react';
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
const Statistical = () => {
  return (
    <div className="bg-adminPrimary col-span-4">
      <div className="grid grid-cols-4 gap-5 p-5">
        <div className="statistical ticket-book-in-month">
          <div className="flex justify-between">
            <span className="text-[13px]">Số vé được đặt trong tháng</span>
            <ReceiptLongIcon
              fontSize="medium"
              className="bg-white rounded-full text-[#FD3432] p-1"
            ></ReceiptLongIcon>
          </div>
          <span className="text-[30px]">560</span>
        </div>

        <div className="statistical affiliate-theater-system">
          <div className="flex justify-between">
            <span className="text-[13px]">Hệ thống rạp liên kết</span>
            <WysiwygIcon
              fontSize="medium"
              className="bg-white rounded-full text-[#1846CD] p-1"
            ></WysiwygIcon>
          </div>
          <span className="text-[30px]">24</span>
        </div>

        <div className="statistical is-playing">
          <div className="flex justify-between">
            <span className="text-[13px]">Phim đang chiếu</span>
            <GroupWorkIcon
              fontSize="medium"
              className="bg-white rounded-full text-[#19A74C] p-1"
            ></GroupWorkIcon>
          </div>
          <span className="text-[30px]">12</span>
        </div>

        <div className="statistical number-of-new-subscribers">
          <div className="flex justify-between">
            <span className="text-[13px]">Số người đăng ký mới</span>
            <GroupAddIcon
              fontSize="medium"
              className="bg-white rounded-full text-[#5B03CA] p-1"
            ></GroupAddIcon>
          </div>
          <span className="text-[30px]">300</span>
        </div>
      </div>
    </div>
  );
};

export default Statistical;