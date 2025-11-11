import React from 'react'
import Banner from './components/Banner'
import SingelProductCard from './common/SingelProductCard'
import Featured from './components/Featured'
import GridDisplay from './components/GridDisplay'
import BestSelling from './components/BestSelling'

const page = () => {
  return (
    <>
    <Banner/>
    <Featured/>
    <GridDisplay/>
    <BestSelling/>
    </>
  )
}

export default page