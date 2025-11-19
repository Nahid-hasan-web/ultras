import FilterBy from "@/app/components/allproudcts/FilterBy";
import FilterHead from "@/app/components/allproudcts/FilterHead";
import ProductsPagination from "@/app/components/allproudcts/ProductsPagination";

export default async function Page({searchParams}) {
  // Await searchParams (required in Next.js 15+)
  const params = await searchParams;
  
  // Get the limit from search params, default to 9
  const limit = params.limit || 9;
  
  // Use the limit in your API call
  const resData = await fetch(`http://localhost:8000/product/getProduct_public?productLimit=${limit}`)
  const data = await resData.json()
  
  console.log(limit);

  return (
    <div className="bg-gray-200">
      <div className="container">
        <FilterHead />
        <div className="flex justify-between">
          <FilterBy />
          <ProductsPagination products={data.productList} />
        </div>
      </div>
    </div>
  );
}