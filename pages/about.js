import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NAV from '../components/nav/NAV'
import PAGE from '../components/PAGE'
import FOOTER from '../components/footer/footer'
import CONTACTGIF from "../assets/contactgif.gif"

export default function about() {
  return (
    <div>
    <div>

<PAGE
            heroclass=" pattern1"
            image=""
            heading="About Me"
            subheading="Confessions of an under-fed developer."
                       title=""
          ></PAGE>

<div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 pb-24 sm:pb-76 xs:pb-76 xl:pb-96 ">
<div className="lg:pt-32 pt-20 pb-12">
        <div class="h-64  xl:ml-64 sm:ml-12 xs:ml-7">
          <div>
            <h1 class=" text-left text-4xl text-black">I am always looking for adventure.</h1>
            <h1 class=" text-left text-xl text-black pt-12">
             After developing websites for 5 years I've learned that the best projects are those that push the boundaries.
             
              I'm always ready and willing to jump on a new project, especially when working with a team. 
              <br></br>
              <br></br>

              I make sure to keep originality in my work and try to stay away from template designs or copy paste code.
              Every component in this portfolio is handmade and not a template or npm package. 
            </h1>
            <div className="mx-auto pt-6">
            <button class="bg-cyan-500 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded">
  Contact Me
</button>
</div>
          </div>
          
          <div>

          </div>
          
        </div>
        
      </div>
      <div><img className="mt-8 w-64 text-center mx-auto xs:pt-96 sm:pt-64 pt-32" src={CONTACTGIF}></img></div>



</div>

</div>

<FOOTER></FOOTER>
</div>

 )
}
