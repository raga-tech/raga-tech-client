'use client';
import React, { useContext } from 'react'

import RagaLogo from '@/assets/logo/raga-logo.png';
import Image from 'next/image';
import { ImageLink, NavLink } from './Links';
import ActionBtn from './buttons/ActionBtn';
import { MdMenu } from 'react-icons/md';
import {Logos} from '@/assets/assets'
import AppContext from '@/app/AppContext';

const Header:React.FC = () => {
     const appContext = useContext(AppContext);
     if(!appContext) throw new Error("Not in the context of the app context");
     const {setData} = appContext;
     return (
          <header className='main-header'>
               <ImageLink fileSrc={RagaLogo} optClass='header-logo' title='raga logo image' />
               <nav className='nav-container'>
                    <i className='menu-dropper'><MdMenu /></i>
                    <div className="nav-links-container">
                         <NavLink title='about' dest='/about' />
                         <NavLink title='services' dest='/services' />
                         <NavLink title='works' dest='/works' />
                    </div>
                    <ActionBtn title="Contact Us" action={() => setData(prev => ({...prev, supportOn: true}))} />
               </nav>
          </header>
     )
}

export default Header;