import React from 'react';
const group = [
  {
    id: 1,
    title: "Nhóm GP00",
    maNhom: "GP00",
  },
  {
    id: 2,
    title: "Nhóm GP01",
    maNhom: "GP01",
  },
  {
    id: 3,
    title: "Nhóm GP02",
    maNhom: "GP02",
  },
  {
    id: 4,
    title: "Nhóm GP03",
    maNhom: "GP03",
  },
  {
    id: 5,
    title: "Nhóm GP04",
    maNhom: "GP04",
  },
  {
    id: 6,
    title: "Nhóm GP05",
    maNhom: "GP05",
  },
  {
    id: 7,
    title: "Nhóm GP06",
    maNhom: "GP06",
  },
  {
    id: 8,
    title: "Nhóm GP07",
    maNhom: "GP07",
  },
  {
    id: 9,
    title: "Nhóm GP08",
    maNhom: "GP08",
  },
  {
    id: 10,
    title: "Nhóm GP09",
    maNhom: "GP09",
  },
];

const ChooseGroup = (props) => {
  const handleClick = props.onClick;
  return (
    <div className="bg-adminPrimary p-10 rounded-2xl">
      <h2 className="text-center text-[30px] mb-5">chọn nhóm cần hiển thị</h2>
      <div className="grid grid-cols-2 gap-5">
        {group?.map((item) => (
          <button
            key={item.id}
            className=" h-[4rem] md:h-[6rem] text-[16px]  relative border border-[#0868FD] text-white rounded-2xl"
            onClick={() => handleClick(item)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooseGroup;