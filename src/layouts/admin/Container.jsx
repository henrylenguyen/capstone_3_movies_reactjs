import React from 'react';
import { useSelector } from 'react-redux';

const Container = () => {
  const { isOpen } = useSelector((state) => state.navbar);
  return (
    <div className={`${isOpen?"flex-grow":"flex-100"} transition-all ease-in-out duration-300 `}>
      <div className="grid grid-rows-6 grid-cols-8 gap-5">
        <div className="bg-green-300 col-span-2">avatar</div>
        <div className="bg-pink-400 col-span-6">Thống kê</div>
        <div className="bg-orange-400 col-span-2 row-span-3">Biểu đồ tròn</div>
        <div className="bg-purple-400 col-span-4 row-span-3">Biểu đồ cột</div>
        <div className="bg-red-400 col-span-6 row-span-2"></div>
      </div>
    </div>
  );
};

export default Container;