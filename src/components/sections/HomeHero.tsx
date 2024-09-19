
// import SectionBackground from "../backgrounds/SectionBackground"
// import HeroImage from "@/assets/back-images/Technical-Innovation.png";
import {BackImages} from "../../assets/assets";
const backImage = '/images/tech-image.jpeg';

const HomeHero = () => {
     return (
     <section className="main-container home-hero-section" style={{backgroundImage: `url(${backImage})`}}>
          {/* <SectionBackground imageUrl={HeroImage}/> */}
          <div className="section-background-cover"></div>
          <div className="content">
               <h1>Welcome to <span>Raga Tech</span></h1>
               <p>The ultimate source of innovation, discovery & development</p>
          </div>
     </section>
     )
}

export default HomeHero