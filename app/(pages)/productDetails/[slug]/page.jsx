import ProductSubImages from '@/app/components/productDetail/ProductSubImages'
import SizeSelector from '@/app/components/productDetail/SizeSelector'
import React from 'react'

const page = () => {
  return (
    <>
      <section id='productDetails' className='py-[60px]'>
        <div className="container">
          <div className='flex gap-10'>
          <ProductSubImages/>
        <div className=''>
          <h2 className='text-3xl font-normal text-textColor'>Product title name</h2>
          <h3 className='text-2xl font-bold tracking-wide  text-textColor my-5'>150Tk</h3>
          <SizeSelector/>
          <p className='text-base font-medium text-gray-500 mt-3'>SKU : <span className='text-textColor'>48624</span></p>
          <p className='text-base font-medium text-gray-500 mt-3'>Category  : <span className='text-textColor'>48624</span></p>
          <p className='text-base font-normal text-gray-600 mt-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem molestiae temporibus eaque inventore ut ullam ab mollitia. Incidunt quasi temporibus repudiandae nemo et dolores veniam reprehenderit. Dolores blanditiis aliquid repellat quae, repudiandae ratione enim, distinctio aut delectus ipsum labore natus vero velit reprehenderit eveniet reiciendis exercitationem consequatur quibusdam a mollitia.
          </p>
        </div>

          </div>

        </div>
      </section>


    </>
  )
}

export default page