import React from "react"
import { useSpring, animated } from 'react-spring'


export default function CARD(props){
    



return(
    <div className="container mx-auto p-5 rounded-lg shadow-lg">

<img className="w-72" src="http://ajnportfolio.com/static/media/wanderlist.14c25e74.png"></img>
<div class="bg-white text-left mx-auto p-2">
    
   <h2 className="text-3xl text-black">{props.title}</h2>

   <h2 className="text-bluegray-200">{props.tag}</h2>
   <h2 className="text-black">{props.desc}</h2>
   <h2 className="text-bluegray-300 text-center pt-3">{props.date}</h2>

   
   
   
   
   </div>

    </div>
)

}