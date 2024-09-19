'use client'

import { RxCross1 } from "react-icons/rx";
import { MdOutlineSupportAgent } from "react-icons/md";

import { useContext, useState } from "react"
import AppContext, { AppContextInterface } from "@/app/AppContext";
import MyImage from "./MyImage";

const SupportContainer = () => {
     const appContext = useContext(AppContext);
     if(!appContext) throw new Error("Invalid usage of app context");
     const {data,setData} = appContext;
     const {supportOn} = data;
     const navigate = (urlStr:string) => {
          window.location.href = urlStr
     }
     return (
          <div className="support-container">
               {
                    !supportOn ? 
                    <div className="contact-icon" onClick={() => setData(prev => ({...prev, supportOn: true}))}>
                         <i><MdOutlineSupportAgent /></i>
                    </div>:
                    <div className="contact-container">
                         <a className="support-row" href="https://wa.me/+250786482268" target="_blank" rel="noopener noreferrer">
                              <MyImage image="/staff/paccy.jpg" width="50px" height="50px" />
                              <p>Operations Manager</p>
                         </a>
                         <a className="support-row" href="https://wa.me/+250780795232" target="_blank" rel="noopener noreferrer"> 
                              <MyImage image="/staff/dushime.png" width="50px" height="50px" />
                              <p>Technical Office</p>
                         </a>
                         <i className="close-icon" onClick={() => setData(prev => ({...prev, supportOn: false}))}><RxCross1 /></i>
                    </div>
               }
          </div>
     )
}

export default SupportContainer