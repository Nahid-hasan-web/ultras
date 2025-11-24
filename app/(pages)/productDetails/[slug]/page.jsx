import ProductSubImages from "@/app/components/productDetail/ProductSubImages";
import SizeSelector from "@/app/components/productDetail/SizeSelector";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  const apiData = await fetch(
    `http://localhost:8000/product/productDetails/${slug}`
  );
  const data = await apiData.json();


  
  return (
    <>
      <section id="productDetails" className="py-[60px]">
        <div className="container">
          <div className="flex gap-10">
            <ProductSubImages productImages={data} />
            <div className="">
              <h2 className="text-3xl font-normal text-textColor">
                {data.title}
              </h2>
              <h3 className="text-2xl font-bold tracking-wide  text-textColor my-5">
                $ {data.discontPrice}
              </h3>
              <SizeSelector />
              <p className="text-base font-medium text-gray-500 mt-3">
                SKU : <span className="text-textColor">48624</span>
              </p>
              <p className="text-base font-medium text-gray-500 mt-3">
                Category : <span className="text-textColor">48624</span>
              </p>
              <p className="text-base font-normal text-gray-600 mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem molestiae temporibus eaque inventore ut ullam ab
                mollitia. Incidunt quasi temporibus repudiandae nemo et dolores
                veniam reprehenderit. Dolores blanditiis aliquid repellat quae,
                repudiandae ratione enim, distinctio aut delectus ipsum labore
                natus vero velit reprehenderit eveniet reiciendis exercitationem
                consequatur quibusdam a mollitia.
              </p>
            </div>
          </div>
          <div className="mt-20 relative">
            <hr className="text-gray-300" />
            <p  className="text-2xl font-medium text-textColor bg-white p-5 absolute -top-9 left-10">Releted product</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
