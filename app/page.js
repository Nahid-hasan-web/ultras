import React from 'react'
import Banner from './components/Banner'
import SingelProductCard from './common/SingelProductCard'
import Featured from './components/Featured'
import GridDisplay from './components/GridDisplay'

const page = () => {
  return (
    <>
    <Banner/>
    <Featured/>
    <GridDisplay/>
    </>
  )
}

export default page