'use client';
import React from 'react'

import RagaLogo from '@/assets/logo/raga-logo.png';
import Image from 'next/image';
import { ImageLink, NavLink } from './Links';
import ActionBtn from './buttons/ActionBtn';
import { MdMenu } from 'react-icons/md';
import {Logos} from '@/assets/assets'

const Header:React.FC = () => {
     return (
          <header className='main-header'>
               <ImageLink fileSrc={Logos.black} optClass='header-logo' title='raga logo image' />
               <nav className='nav-container'>
                    <i className='menu-dropper'><MdMenu /></i>
                    <div className="nav-links-container">
                         <NavLink title='about' dest='/about' />
                         <NavLink title='services' dest='/services' />
                         <NavLink title='works' dest='/works' />
                    </div>
                    <ActionBtn title="Hire Us" dest="/contact" />
               </nav>
          </header>
     )
}

export default Header;