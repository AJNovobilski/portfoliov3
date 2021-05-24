import react from "react";
import image from "../../assets/ajnovobilskihome.gif";

export default function HERODARK(props) {
  return (
    <div className={`${props.heroclass}`}>
      <div className="lg:pt-64 pt-36 ">
      <div className=" md:pt-12 ">

      </div>
      <div class="h-64 grid grid-rows-3 grid-flow-col gap-4 xl:ml-64 sm:ml-12 xs:ml-7">
        <div>
      <h1 class=" text-left text-4xl text-white">{props.heading}</h1>
      <h1 class=" text-left text-2xl text-white pt-12">{props.subheading}</h1>

      </div>
      <div class="mx-auto">

</div>
      <div>
      <button class="text-center bg-bluegray-200 hover:bg-transparent hover:text-white text-black font-bold py-2 px-4 rounded sm:mt-12 xs:mt-12">
  Learn More
</button> 
   </div>




</div>



</div>


    </div>

    
  );
}
