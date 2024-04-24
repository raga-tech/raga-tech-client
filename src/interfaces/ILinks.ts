import { StaticImageData } from "next/image";

export interface INavLink{
     title?:string,
     dest?:string,
     fileSrc?:StaticImageData,
     optClass?: string
}