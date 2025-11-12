import { Tabs } from 'antd';
import React from 'react'

const BestSelling = () => {
  
    const items = [
  {
    key: '1',
    label: 'All',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Shoes',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Pants',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Hoodie',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '5',
    label: 'outer',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '6',
    label: 'jackets',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '7',
    label: 'Accessories',
    children: 'Content of Tab Pane 3',
  }
];
  return (
    <>
    
        <section className='mt-[60px] lg:mt-[270px]'>
            <div className="container">
                <h2 className='text-[42px] font-extrabold font-inter text-[#1a1a1a]'>best selling products</h2>
          <Tabs defaultActiveKey="1" items={items} className='customTabls'  />
            </div>
        </section>
    </>
  )
}

export default BestSelling