import react from "react";

const projectdata = require("../../json/services.json");

const listItems = projectdata.map((projects) => (
    <div className="text-center mx-auto">
  <div class="mx-auto h-96 w-96">
    <img class="" src="https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509"></img>

    <div class="bg-white">
      <h2 className="text-2xl font-semibold">{projects.name}</h2>
    </div>
    <div class="bg-white">
      <h3 className="break-words p-4 text-left font-semibold text-xs">{projects.desc}</h3>
    </div>
  </div>
  </div>
));

export default function CARDMAP() {
  return <>{listItems}</>;
}
