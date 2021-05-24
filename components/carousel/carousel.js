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
    <div>
    <div className="bg-bluegray-50">
      <div className="grid grid-cols-5">
        <div className="mx-auto text-center order-1">
          <img onClick={handleprevious} className="xs:w-12 transform rotate-180 mt-36  transform hover:-translate-y-1 hover:scale-110 duration-300" src="https://img.icons8.com/flat-round/64/000000/arrow-right.png"/>
          </div>
        <div className="mx-auto text-center order-3 ">
        <img onClick={handlenext} className="mt-36  xs:w-12 transform hover:-translate-y-1 hover:scale-110 duration-300" src="https://img.icons8.com/flat-round/64/000000/arrow-right.png"/>

        </div>
        <div className="mx-auto text-center order-2 col-span-3 mt-12">
        <animated.div style={props}>
          <CARD
            img = {carddata[numcount].image}
            title={carddata[numcount].title}
            desc={carddata[numcount].desc}
            tag={carddata[numcount].tag}
            date={carddata[numcount].date}
            github={carddata[numcount].github}
            link = {carddata[numcount].link}
          ></CARD>
          </animated.div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="invisible mx-auto text-center order-1 sm:invisible xs:invisible text-center">
          Next{" "}
        </div>
        <div className="  mx-auto text-center order-2 sm:invisible xs:invisible">
          {" "}
        </div>
        <div className=" invisible mx-auto text-center order-3 sm:invisible xs:invisible text-center">
          Next{" "}
        </div>
      </div>
    </div>
    </div>

  );
}
