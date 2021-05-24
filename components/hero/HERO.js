import react from "react";
import image from "../../assets/ajnovobilskihome.gif";

export default function HERO(props) {
  return (
    <div className={`${props.heroclass}`}>
      <div className="lg:pt-64 pt-48 md:pt-64">
      <div className=" md:pt-12 xl:pt-16">

        <img class="pr-3 pt-18 mx-auto visible" src={props.mobileimage} />
      </div>
      <div class="grid grid-cols-3 md:grid-cols-1">
        <div>
      <h1 class=" xl:text-right text-white">{props.heading}</h1>
      </div>
      <div class="mx-auto pt-5">
      <button class="text-center bg-white hover:bg-transparent hover:text-white text-black font-bold py-2 px-4 rounded">
  Learn More
</button> 
</div>
      <div>
      <h1 class=" lg:text-center text-white">{props.heading}</h1>
      </div>
</div>
</div>
    </div>
  );
}
