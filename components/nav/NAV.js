import React, { useState, useEffect } from "react";
import SIDENAV from "./SIDENAV";

const globaldata = require("./json/globals.json");

export default function NAV(globaldata) {
  const [open, toggle] = React.useState(false);

  function test() {
    toggle(!open);
  }



  var classname = "w-0 h-0 invisible ";
  var mobilemenuicon = (
    <img
      class="w-6"
      src="https://img.icons8.com/office/40/000000/menu--v1.png"
    />
  );

  if (open === true) {
    classname =
      " transition ease-in-out duration-700 bg-bluegray-200 h-screen w-56 absolute ";
    mobilemenuicon = (
      <img
        class="w-6 "
        src="https://img.icons8.com/office/40/000000/menu--v5.png"
      />
    );
  }




  

var overlay =  "col-span-3 bg-black w-screen h-screen absolute invisible"

  if (open === true) {
    overlay =
      "visible col-span-3 bg-black opacity-60 w-screen h-screen absolute ";
   
  }

  function handlekeydown(e) {
  if (['Enter', 'ArrowRight', 'Tab'].includes(e.key)) {
    // select item
    e.preventDefault();
  } else if (e.key === 'ArrowUp') {
    // go to top item
    e.preventDefault();
  } else if (e.key === 'ArrowDown') {
    // go to bottom item
    e.preventDefault();
  } else if (e.key === 'Escape') {
console.log("asdffoij")
    e.preventDefault();
  }
}

  return (

    
    <div  id="initial">
           
      <nav className="bg-black">
        {/* mobile */}
        <div className="grid grid-rows-1 grid-cols-4 pt-5 pb-5 flex">
          <div onClick={test} className="pl-2">
            {mobilemenuicon}
          </div>
          <div className="col-span-2 text-white text-center mx-auto">
            <img
              classname="h-2"
              src="https://img.icons8.com/wired/32/000000/home.png"
            ></img>
          </div>
          <div className="mx-auto items-center flex">
            <h2></h2>
            <img
              classname="h-2"
              src=""
            ></img>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-3" onKeyDown={handlekeydown}>

      <div class="z-10"   onKeyDown={handlekeydown}  tabIndex="1"
>      <SIDENAV visible={classname}></SIDENAV>
</div>
  <div class={overlay}  onClick={test}></div>
  </div>
  <div>
    </div>
    </div>
  );
}
