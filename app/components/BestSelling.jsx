import { Tabs } from 'antd';
import React from 'react'

const BestSelling = () => {

    const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
  return (
    <>
    
        <section className='mt-[60px] lg:mt-[270px]'>
            <div className="container">
                <h2 className='text-[42px] font-extrabold font-inter text-[#1a1a1a]'>best selling products</h2>

            </div>
        </section>
    </>
  )
}

export default BestSelling