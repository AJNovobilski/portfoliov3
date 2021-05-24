import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NAV from '../components/nav/NAV'
import PAGE from '../components/PAGE'
import CARD from '../components/carousel/card'
import FOOTER from '../components/footer/footer'

const projectdata = require("../components/carousel/projects.json");

const projectlist = projectdata.map((links)=>(
<div>
<CARD
            img = {links.image}
            title={links.title}
            desc={links.desc}
            tag={links.tag}
            date={links.date}
            github={links.github}
            link = {links.link}
          ></CARD>
          </div>
))


export default function PROJECTS() {
  return (
    <div>
<NAV></NAV>  

<div className="pattern1 grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">

{projectlist}


</div>

<FOOTER></FOOTER>

</div>


)
}
