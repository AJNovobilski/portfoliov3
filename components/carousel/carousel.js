import React, { useEffect, useState } from "react";
import CARD from "./card";
import { useSpring, animated, config } from 'react-spring'



var carddata = require("./projects.json");

export default function CAROUSEL() {

    const [active, set] = useState(false)


    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 200,
        config: config.molasses,
        onRest: () => set(!active),
      })    





  const [numcount, rotate] = useState(0);

  function handlenext() {
      if (numcount === 6){  
          
        
        rotate(0);
        
        
        }
      else {rotate(numcount + 1)
    
    
    }
  }

  function handleprevious() {
    if (numcount === 0){    rotate(6);}
    else {rotate(numcount - 1)}
}


  return (
    <div className="bg-bluegray-50">
      <div className="grid grid-cols-5 ">
        <div className="mx-auto text-center order-1">
          <button onClick={handleprevious} class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
            Previous
          </button>
        </div>
        <div className="mx-auto text-center order-3 ">
        <button onClick={handlenext} class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
  Next
</button>
        </div>
        <div className="mx-auto text-center order-2 col-span-3">
        <animated.div style={props}>
          <CARD
            title={carddata[numcount].title}
            desc="asdfaoij"
            tag="web scraping"
            date="2-2-2020"
          ></CARD>
          </animated.div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="mx-auto text-center order-1 sm:invisible xs:invisible text-center">
          Next{" "}
        </div>
        <div className="mx-auto text-center order-2 sm:invisible xs:invisible">
          {" "}
        </div>
        <div className="mx-auto text-center order-3 sm:invisible xs:invisible text-center">
          Next{" "}
        </div>
      </div>
    </div>
  );
}
