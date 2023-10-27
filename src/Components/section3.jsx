import React from "react";
import Card from "./clients";
import { cards } from "../constants/const";
import styles from "../style";

export default function Section3() {
  return (
   <section>

   <div className="alof mr-[-10px] ml-[-10px] flex items-center justify-center sm:mr-10 sm:ml-10 ">
<div className="xxs:rotate-[1.3deg] xs:rotate-[0deg]">
  

<h2 className={` ${styles.flexCenter}   sm:text-[40px]  xxs:text-[28px] sm::bottom-0 xxs:bottom-5 relative  
text-white sm:w-[full] xxs:ml-[20px] cursor-default flex flex-wrap font-bold pt-16`}>We are committed  <br className="sm:hidden xxs:block"/>to making space  <br className="xxs:hidden sm:block"/>  science   <br className="sm:hidden xxs:block"/>accessible to all. Explore our <br className="xxs:hidden sm:block"/> &nbsp;  educational resources, including</h2>
 <div className="flex sm:scale-[0.75] xxs:flex-col xxs:pl-10  sm:flex-row sm:pl-0 xxs:pt-[40px] sm:pt-0 xxs:scale-[0.8]">
{cards.map(x=>{return(

<Card key={x.id}
pra={x.content}
title={x.title}
num={x.num}/>
)})}

</div>
 </div>
 </div>

 </section>  
  )
}

