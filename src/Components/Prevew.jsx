/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../style'
import Cardio from './Cards'
import { features } from '../constants/const'
 const Prevew = () => {
  return (
    <section className='flex ml-16 mt-10 md:flex-row flex-col justify-between '>
<div className=' flex flex-wrap'>
  <p className='md:w-[400px] md:text-[42px] font-bold font-poppins mt-12 flex 
text-[32px] w-[300px] flex-wrap cursor-default
'>Join our vibrant community of space enthusiasts where you can</p>
</div>
<div className={`${styles.flexStart} flex-wrap sm:justify-start justify-center scale-[0.8]  `}> 
{features.map(x=><Cardio logo={x.icon}
title={x.title}
par={x.content}
/>)}
</div>

    </section>
  )
}
export default  Prevew