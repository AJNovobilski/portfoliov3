import React, {useState} from "react";
import image from "../../assets/ajnovobilskihome.gif";
import pdfjump from "../../assets/ajnportfolio-resume.gif"

export default function HERODARK(props) {

const [state, setstate] = useState('')

function myfunction() {

setstate('clicked')


}

function myfunction2() {

console.log('step2')


}

var textgif = <h2>Download My Resume</h2>
var stylegif = "text-center bg-bluegray-200 hover:bg-transparent hover:text-white text-black font-bold py-2 px-4 rounded sm:mt-12 xs:mt-12 duration-500	"
var buttongif =  <button onClick={myfunction} class={stylegif}>{textgif}</button>


if (state === 'clicked')
{console.log(state)
textgif = <img className="flex inline w-12" src={pdfjump}></img>
var stylegif = "bg-white text-center hover:grow-12 py-2 px-4 rounded sm:mt-12 xs:mt-12 duration-300	"
var buttongif = <button onClick={myfunction2} class={stylegif}>{textgif}</button>

}

  return (
    <div className={`${props.heroclass}`}>
      <div className="lg:pt-64 pt-36 pb-12">
        <div className=" md:pt-12 "></div>
        <div class="h-64 grid grid-rows-3 grid-flow-col gap-4 xl:ml-64 sm:ml-12 xs:ml-7">
          <div>
            <h1 class=" text-left text-4xl text-white">{props.heading}</h1>
            <h1 class=" text-left text-2xl text-white pt-12">
              {props.subheading}
            </h1>
          </div>
          <div class="mx-auto"></div>
          <div>
            {buttongif}
          </div>
        </div>
      </div>
    </div>
  );
}
