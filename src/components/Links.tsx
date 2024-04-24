'use client';

import { INavLink } from "@/interfaces/ILinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const NavLink:React.FC<INavLink> = ({title,dest}) => {
     const pathname = usePathname();
     return (
          <Link href={dest || "/"} className={pathname === dest ?"nav-link active-link":"nav-link"}>{title}</Link>
     )
}

export const ImageLink: React.FC<INavLink> = ({title, fileSrc, dest, optClass}) => {
     return(
          <Link href={dest || "/"}>
               <Image src={fileSrc || ""} alt={title || "logo image"} width={50} height={50} className={optClass || ""}/>
          </Link>
     )
}