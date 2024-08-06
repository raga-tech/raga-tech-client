import { ISectionBack } from '@/interfaces/ISectionBack'
import Image from 'next/image'
import React from 'react'

// const styles  = (imageUrl:string): Object => {
//      return {
//           backgroundImage: imageUrl
//      }
// }

const SectionBackground:React.FC<ISectionBack> = ({imageUrl}) => {
     return (
          <div className='section-background'>
               <Image src={imageUrl || ""} className='image' alt='image' />
               <div className='back-cover'></div>
          </div>
     )
}

export default SectionBackground