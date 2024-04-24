'use client';

import { IButton } from '@/interfaces/IButton'
import { useRouter } from 'next/navigation';
import React, { MouseEventHandler } from 'react'

const ActionBtn: React.FC<IButton> = ({title, dest}) => {
     const router = useRouter();
     const handleClick = () => {
          

          if(dest !== undefined){
               router.push(dest);
          }else{
               console.log("error: destination undefined");
          }
     }
     return (
     <button onClick={handleClick} className='action-btn' type='button'>{title}</button>
     )
}

export default ActionBtn