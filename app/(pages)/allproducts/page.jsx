import FilterBy from '@/app/components/allproudcts/FilterBy'
import FilterHead from '@/app/components/allproudcts/FilterHead'
import ProductsPagination from '@/app/components/allproudcts/ProductsPagination'
import React from 'react'

const page = async ({searchParams }) => {

  const params = await searchParams

  const limit = params.limit || 9
  
  const apiData = await fetch(`http://localhost:8000/product/getProduct_public?productLimit=${limit}`)
  const data = await apiData.json()
  
  
  
  return (
    <>
      <section className='py-15 bg-gray-100'>
        <div className="container">
          <FilterHead/>
          <div className='flex justify-between'>
            <FilterBy/>
            <ProductsPagination products={data.productList}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default page