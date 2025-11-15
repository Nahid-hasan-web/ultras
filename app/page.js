import React from 'react'
// import Banner from './components/Banner'
import SingelProductCard from './common/SingelProductCard'
import Featured from './components/Featured'
import GridDisplay from './components/GridDisplay'
import BestSelling from './components/BestSelling'
import FlashSale from './components/FlashSale'
import Journal from './components/Journal'
import BrandLogos from './components/BrandLogos'

const page = () => {
  return (
    <>
    {/* <Banner/> */}
    <Featured/>
    <GridDisplay/>
    <BestSelling/>
    <FlashSale/>
    <Journal/>
    <BrandLogos/>
    </>
  )
}

export default page