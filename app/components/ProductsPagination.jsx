import React from "react";
import SingelProductCard from "../common/SingelProductCard";
import { Pagination } from "antd";

const ProductsPagination = () => {
  return (
    <>
      <div className="flex-1">
        <div className="flex gap-5 flex-wrap justify-end mb-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
            <SingelProductCard />
          ))}
        </div>
        <Pagination align="end" defaultCurrent={1} total={50} />
      </div>
    </>
  );
};

export default ProductsPagination;
