// eslint-disable-next-line no-unused-vars
import React from 'react'
import { client } from '../constants/const'

import styles from "../style"
function Brands() {
return <section className={`${styles.flexCenter} my-4`}>
<div className={`${styles.flexCenter} flex-wrap w-full`}>
  {client.map((client)=>(
<div key={client.id} className={`flex-1 ${styles.flexCenter} sm:m-w-[192px] min-w-[120px] `}>
<img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain' />
</div>

  ))}
</div>
</section>}
  


export default Brands