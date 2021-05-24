import PAGE from "../components/PAGE";
import SERVICESECTION from "../components/servicesection/SERVICESECTION";
import desktopgif from "../assets/sunsetcropped.gif";

export default function Home() {
  return (
    <div>
      <main id="page-wrap">
        <div id="outer-container">
          <PAGE
            heroclass=" pattern1"
            image={desktopgif}
            heading="Welcome To My Portfolio"
            subheading="A collection of 5+ years at a computer."
            title="Worlds Best Web Developer - AJ Novobilski"
          ></PAGE>
          <div className="pattern1">
            <h1 className="text-white xl:text-2xl xl:ml-64 sm:ml-12 pt-64">
              My name is AJ Novobilski and I am a full stack web developer.
            </h1>
            <h2 className="text-white xl:text-xl xl:ml-64 sm:ml-12 pt-12">
              I build responsive applications for the web.
            </h2>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 via-cyan-50 to-red-50">
          <h1 className="p-6 text-4xl text-center align-middle">
            My Web Skills
          </h1>
        </div>

        <div className="grid grid-cols-3">
          <div className="bg-amber-200 h-32 hover:transform scale-150">
            <div className="shadow-sm	container mx-auto align-middle h-32 sm:h-16 sm:p-6 p-12">
              <h2 className="text-3xl sm:text-xl text-black text-center align-middle ">
                NodeJS
              </h2>
            </div>
          </div>
          <div className="bg-cyan-200 h-32">
            <div className="shadow-sm	container mx-auto align-middle h-32 sm:h-16 sm:p-6 p-12">
              <h2 className="text-3xl sm:text-xl text-black text-center align-middle ">
                React
              </h2>
            </div>
          </div>
          <div className="bg-red-200">
            <div className="shadow-sm	container mx-auto align-middle h-32 sm:h-16 sm:p-6 p-12">
              <h2 className="text-3xl sm:text-xl text-black text-center align-middle ">
                Web Scraping
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="bg-green-200 h-32">
            <div className="shadow-sm	container mx-auto align-middle h-32 sm:h-16 sm:p-6 p-12">
              <h2 className="text-3xl sm:text-xl text-black text-center align-middle ">
                Mongo DB
              </h2>
            </div>
          </div>
          <div className="bg-white h-32">
            <div className="shadow-sm	container mx-auto align-middle h-32 sm:h-16 sm:p-6 p-12">
              <h2 className="text-3xl  sm:text-xl text-black text-center align-middle ">
                WordPress
              </h2>
            </div>
          </div>
          <div className="bg-orange-200">
            <div className="shadow-sm	container mx-auto align-middle h-32 sm:h-16 sm:p-6 p-12">
              <h2 className="text-3xl sm:text-xl text-black text-center align-middle ">
                HTML/CSS
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
