import Image from "next/image";
import MyImage from "../MyImage";

const backImage = '/images/tech-image2.jpg';
const HomeServices = () => {
     return (
          <section className="main-container home-services-section" style={{backgroundImage:`url(${backImage})`}}>
               <div className="section-background-cover"></div>
               <div className="title">
                    <h3>Our Services</h3>    
               </div>
               <div className="content">
                    <div className="service-card">
                         <MyImage image="/images/web-dev.png" />
                         <h4>Web Development</h4>
                         <p>We create custom websites tailored to your business needs, delivering user-friendly, responsive designs for optimal online presence.</p>
                    </div>
                    <div className="service-card">
                         <MyImage image="/images/web-maintenance.png" />
                         <h4>Web Maintenance</h4>
                         <p>Comprehensive website maintenance services to keep your site updated, secure, and running smoothly with regular backups and performance checks.</p>
                    </div>
                    <div className="service-card">
                         <MyImage image="/images/web-host.png" />
                         <h4>Web Hosting</h4>
                         <p>Reliable web hosting solutions to keep your site secure and online 24/7, ensuring fast load times and seamless performance.</p>
                    </div>
               </div>
          </section>
     )
}

export default HomeServices;