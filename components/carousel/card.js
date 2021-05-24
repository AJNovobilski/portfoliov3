import React from "react"
import { useSpring, animated } from 'react-spring'


export default function CARD(props){
    
var github =     <a target="_blank" href={props.github}><button class="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 xs:px-2 px-2 rounded float-right hover:bg-cyan-700">
  Github 
</button>
</a>

if (props.github === "")
{github =    <div></div>}

return(
    <div className="container mx-auto  xs:p-2 relative rounded-lg shadow-lg xs:w-56 sm:w-48 w-72 transition duration-500 ease-in-out bg-blue-600  transform hover:-translate-y-1 hover:scale-110 border-2">

<img className="w-72" src={props.img}></img>
<div class="bg-white text-left mx-auto p-2">
    
   <h2 className="text-xl text-black break-words font-bold">{props.title}</h2>

   <h2 className="text-bluegray-200 text-lg pt-2">{props.tag}</h2>
   <h2 className="text-black pt-1">{props.desc}</h2>
   <h2 className="text-bluegray-300 text-center pt-3">{props.date}</h2>

   <div className="grid grid-col-1">

<div class="pt-4">
{github}

<a target="_blanks" href={props.link}><button class="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 xs:px-2 px-4 rounded hover:bg-cyan-700">
  Live 
</button>
</a>
</div>
</div>



   
   
   
   
   </div>

    </div>
)

}