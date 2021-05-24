import React from "react"
import Link from "next/link";

const navdata = require("../nav/json/nav.json");

const footerlist = navdata.map((links) => (
    <Link key={links.link} href={links.link}>
      <a>
        <div className="h-12 flex items-center hover:bg-bluegray-50 duration-200">
          <img className="w-7 ml-2" src={links.icon}></img>
          <div className="text-center pl-3 text-white ">{links.name}</div>
        </div>
      </a>
    </Link>
))


export default function FOOTER(){

return(
<div class="bg-black mx-auto w-full">

<div class="grid grid-cols-5 xs:grid-cols-3 sm:grid-cols-3">

{footerlist}


</div>


</div>
)


}