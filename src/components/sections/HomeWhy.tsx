import Image from "next/image"
import { WhyImages } from "@/assets/assets"

const HomeWhy = () => {
     return (
          <div className="main-container home-why-section">
               <div className="title">
                    <h3>Why choose Raga Tech</h3>
               </div>
               <div className="card-content">
                    <div className="why-card">
                         <Image width={50} height={50} alt="punctuality-icon" src={WhyImages.punctuality} />
                         <h4>Punctuality</h4>
                         <p>Delivering projects and solutions on time, everytime.</p>
                    </div>
                    <div className="why-card">
                         <Image width={50} height={50} alt="transparency-icon" src={WhyImages.transparency} />
                         <h4>Transparency</h4>
                         <p>Open and honest communication with clients, partners, and within our team.</p>
                    </div>
                    <div className="why-card">
                         <Image width={50} height={50} alt="integrity-icon" src={WhyImages.integrity} />
                         <h4>Integrity</h4>
                         <p>Upholding the highest standards of ethics and professionalism in all our dealings.</p>
                    </div>
                    <div className="why-card">
                         <Image width={50} height={50} alt="collaboration-icon" src={WhyImages.collaboration} />
                         <h4>Collaboration</h4>
                         <p>Fostering a cooperative and supportive work environment where teamwork and partnership drive our success.</p>
                    </div>
               </div>
          </div>
     )
}

export default HomeWhy