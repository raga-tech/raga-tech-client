import Image from 'next/image'
import ActionBtn from '../buttons/ActionBtn'
import { AboutImages } from '@/assets/assets';

const HomeAbout = () => {
     return (
          <div className="main-container home-about-section">
               <div className="title">
                    <h3>Who we are</h3>
               </div>
               <div className="about-content">
                    <div className="text">
                         <p>Raga Tech is tech company founded in 2022 with an aim of extending technology services to individuals, small business and large organisations</p>
                         <p>Raga Tech aims at delivering the best services, which you can find in our services section, in the most suitable way for you to achieve excellence in whatever business field you are in.</p>
                         <p>Click the button to know more about us </p>
                         <ActionBtn title="Know More" dest='/' />
                    </div>
                    <div className="images">
                         <Image width={500} height={400} src={AboutImages.image1} alt='about technology image' />
                    </div>
               </div>
          </div>
     )
}

export default HomeAbout