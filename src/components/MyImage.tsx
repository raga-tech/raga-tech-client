import React from 'react'

interface ImageInterface{
     image: string
     action?: () => unknown
     width?: string
     height?: string
}

const MyImage: React.FC<ImageInterface> = ({image, action, width="100%", height="100%"}) => {
     const styles = {
          backgroundImage: `url("${image}")`,
          width,
          height
     }
     return (
          <div className='my-image-container' style={styles} onClick={action} ></div>
     )
}

export default MyImage