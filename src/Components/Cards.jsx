import React from "react"

function Cardio(props){
return(
// eslint-disable-next-line react/prop-types
<section className="con mb-[50px] ">
<div> <img src={props.logo} alt="icon" className="bg-primary p-5 rounded-[20px] w-[80px] h-[80px]" />
<h2 className="font-bold text-[30px] mt-5 mb-5 cursor-default">{props.title}</h2>
<p className="sm:w-[268px] cursor-default ">{props.par}</p>
</div>
</section>
)
}

export default Cardio