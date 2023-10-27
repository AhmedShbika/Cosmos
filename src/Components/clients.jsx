import React from 'react'
import styles from '../style'
function Card(props){
  return(
<div className=' crody p-10 mr-10 bg-white rounded-[15px] xxs:mb-12 sm:mb-0  card'>
  <h1 className='text-[35px] font-bold text-primary num cursor-default'>{props.num}</h1>
  <h2 className='mb-5 mt-5 font-bold max-w-[200px] cursor-default'>{props.title}</h2>
  <p className='sm:max-w-[280px] xxs:text-[15px] sm:text-[19px] font-poppins cursor-default'>{props.pra}</p>
</div>

  )
}
export default Card