import PAGE from "../components/PAGE";
import SERVICESECTION from "../components/servicesection/SERVICESECTION";
import desktopgif from "../assets/sunsetcropped.gif";
import CAROUSEL from "../components/carousel/carousel"
import FOOTER from "../components/footer/footer"

export default function Home() {
  return (
    <div>
          <PAGE
            heroclass=" pattern1"
            image={desktopgif}
            heading="Welcome To My Portfolio"
            subheading="A collection of 5+ years of web dev experience."           title=""
          ></PAGE>

<section id="skills">
        <div className="bg-gradient-to-r from-amber-50 via-cyan-50 to-red-50">
          <h1 className="p-6 text-4xl text-center align-middle">
            My Web Skills
          </h1>
        </div>

        <div className="grid grid-cols-3">
          <div className="bg-amber-200 h-32 hover:bg-amber-500 duration-300">
            <div className="	container mx-auto align-middle h-32 sm:h-16 sm:p-6 xs:p-6 p-12">
              <h2 className="text-3xl xs:text-sm sm:text-xl text-black text-center align-middle ">
                NodeJS
              </h2>
            </div>
          </div>
          <div className="bg-cyan-200 h-32 hover:bg-cyan-500 duration-300">
            <div className="container mx-auto align-middle h-32 sm:h-16 sm:p-6 xs:p-6 p-12">
              <h2 className="text-3xl xs:text-sm sm:text-xl text-black text-center align-middle ">
                React
              </h2>
            </div>
          </div>
          <div className="bg-red-200 hover:bg-red-500 duration-300">
            <div className="	container mx-auto align-middle h-32 sm:h-16 sm:p-6 xs:p-6 p-12">
              <h2 className="text-3xl xs:text-sm sm:text-xl text-black text-center align-middle ">
                Web Scraping
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="bg-green-200 h-32 hover:bg-green-500 duration-300">
            <div className="	container mx-auto align-middle h-32 sm:h-16 sm:p-6 xs:p-6 p-12">
              <h2 className="text-3xl xs:text-sm sm:text-xl text-black text-center align-middle ">
                Mongo DB
              </h2>
            </div>
          </div>
          <div className="bg-white h-32 hover:bg-gray-200 duration-300">
            <div className="container mx-auto align-middle h-32 sm:h-16 sm:p-6 xs:p-6 p-12">
              <h2 className="text-3xl  xs:text-sm sm:text-xl text-black text-center align-middle ">
                WordPress
              </h2>
            </div>
          </div>
          <div className="bg-orange-200 hover:bg-orange-500 duration-300">
            <div className="container mx-auto align-middle h-32 sm:h-16 sm:p-6 xs:p-6 p-12">
              <h2 className="text-3xl xs:text-sm sm:text-xl text-black text-center align-middle ">
                HTML/CSS
              </h2>
            </div>
          </div>
        </div>
        </section>
        <section>
<CAROUSEL></CAROUSEL>


        </section>
      <FOOTER></FOOTER>
      </div>
  );
}
