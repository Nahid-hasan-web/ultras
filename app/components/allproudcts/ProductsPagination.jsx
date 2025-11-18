import React from "react";
import { Pagination } from "antd";
import SingelProductCard from "@/app/common/SingelProductCard";

const ProductsPagination = ({products}) => {
  return (
    <>
      <div className="flex-1">
        <div className="flex gap-5 flex-wrap justify-end mb-5">
          {
          products.map((item) => (
            <SingelProductCard porductImage={item.thumbnail} productName={item.title} productPrice={item.discontPrice} productStock={item.stock} />
          ))}
        </div>
        <Pagination align="end" defaultCurrent={1} total={50} />
      </div>
    </>
  );
};

export default ProductsPagination;
