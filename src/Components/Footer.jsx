import React from 'react'
import {logo} from'../assets'
import styles from '../style'
import { footerLink } from '../constants/const'
const Footer = () => 
  (
  <section className={`${styles.flexCenter} ${styles.paddingY } mb-[-50px] flex-col text-black relative bottom-[460px]`}>
<div className={`${styles.flexCenter} md:flex-row  flex-col mb-8 w-full`}>
  <div className={`flex-1 flex-col justify-start `}>
    <img src={logo} alt="hoobank" className='w-[166px] h-[52px] object-contain sm:ml-10 sm:mt-10'/>

  </div>
<div className='flex-[1.5] relative sm:left-[-70px]  w-full flex flex-row justify-between pr-10 sm:ml-0 xxs:ml-8  flex-wrap md:mt-10 mt-10'>
  {footerLink.map((footerLinks)=>(
     <div key={footerLinks.key} className='flex flex-col ss:my-0  my-4 min-w-[150px]'>
     
   <ul className='list-none mt-4 sm:flex xxs:block  '>
{footerLinks.links.map((link,index)=>(
<li key={link.name} className={`  font-poppins font-normal text-[14px] leading-[24px] text-black hover:text-primary
 mr-[19px]   cursor-pointer ${index !== link.length -1? "mb-4":"mb-0"} `}
 >
{link.name}

</li>

))}

   </ul>
    </div>
  ))}
</div>
</div>

<div className='flex justify-center  w-full items-center md:flex-row flex-col pt-6 relative   border-t-[1px] border-t-[#3F3E45] '>
  <p className='font-poppins font-normal text-[18px] text-center leading-[72px] text-black  '>
  [contact@odyssey.com].
  </p>


</div>
  </section>
   
   )


export default Footer