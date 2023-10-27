// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './style'

// eslint-disable-next-line no-unused-vars
import { Hero,Navbar,Brands,Prevew,Section3,Section4,Footer} from './Components' 

const App = () => 
   (
<div className="w-full overflow-hidden  mt-4 max-h-full ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  <div  className=' '>
    <Hero/>
  </div>
  <div className='relative sm:bottom-[70px] md:top-[-70px] sm:top-0  '>
<Brands/>
 <Prevew/>
  <Section3/>
  <Section4/>
 <Footer/>
  </div>
</div>
  )

  export default App