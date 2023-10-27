/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { astroBoy,astro2,asrophone} from '../assets'
import { play } from '../assets'
import Button from './Button'

const Hero = () => 
   (
<div className=''>
<div className='w-full flex items-center justify-center' >
  

<div className=' flex planet sm:justify-between xxs:flex-col sm:flex-row sm:ml-10 lg:w-[1240px] w-full xxs:mr-0 xxs:ml-0  flex-1 sm:mr-10  '>
<h1 className='  font-semibold max-w-[303px] text-white ml-10 py-16 xxs:justify-center

lg:text-[30px] md:text-[30px]
lg:mr-[220px] flex-wrap md:mr-[120px] mr-220px 
flex-auto sm:mr-[150px] sm:flex-1  ss:flex-1 mr-0  sm:text-[30px] ss:text-[25px] xxs:text-[30px] xxs:max-w-[300px]
 sm:max-w-[303px] xxs:left-[-20px] relative sm:left-0 
'>Unveiling the Wonders of the Universe</h1 >
  <img src={ screen.width==130 ||  screen.width<130?asrophone:astro2 }  alt="astroboy" className='   ss:w[280px] ss:h-[331]  astro md:w-[580px] xs: sm:relative md:top-[100px] sm:top-[170px] top-0  flex 
   ml-0 md:h-[631px] py-4 z-[0]   xxs:hidden sm:block
  w-[380px] h-[431px]    relative xxs:scale-[1] xxs:pl-2 sm:pl-0 sm:left-0 sm:scale-100 rotate-[-1.2deg]
xxs:mt-[-60px]
  '/>

<img src={asrophone} alt=""  className='xxs:block astro pr-[3px] xs:scale-[0.7] xs:h-[750px]   xs:bottom-[100px] sm:hidden relative bottom-[40px] mb-[-120px] xxs:scale-[1.1] rotate-[-0.9deg] '/>
</div>

    </div>
    <div className=' flex md:flex-col relative flex-col sm:bottom-[40px] md:bottom-[200px] bottom-250 sm:scale-75  md:scale-100 scale-100 sm:flex-row sm:relative  
left-[35px] md:left-[65px] sm:left-[-80px] flex-1 bsm:flex-col ss:flex-row 
     xxs:scale-[0.85] xxs:mt-10 sm:mt-0  mb-[40px] sm:mb-0  xxs:left-[-9px] 
     '>
  <p className=' flex max-w-[395px] md:text-[16px] font-poppins text-sm relative le]'>
  At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. 
  We are your premier destination for all things related to space exploration, astronomy, 
  and the mysteries of the universe. Whether you're a seasoned 
  astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. 
  </p>
<div className='flex mt-7 flex-row flex-1 flex-shrink '>
<Button 
title="get started"
rounded="10px"
text=' rounded-[100px] ss:flex sm:block ss:items-center  flex-shrink xxs:text-[15px] xxs:w-[200px] sm:w-[180px] xxs:scale-[1]'
/>
<div className=' watch flex justify-center items-center  flex-wrap  mr-10  relative xxs:left-[30px] sm:left-0'>
 <p className=' sm:w-[123px] font-poppins font-semibold ss:text-[15px] 
 flex flex-1  xxs:w-[157px] xxs:text-[19px] sm:text-[20px]
 sm:ml-10 vedio
 ' > Watch video</p>
  <img src={play} alt="play" className='sm:w-[40px] play  xxs:h-[30px] xxs:w-[30px]  sm:h-[40px] flex flex-shrink' />
</div>
</div>
</div>
    </div>
  )

export default Hero