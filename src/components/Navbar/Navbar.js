import React from "react";
import style from '../../styles/navbar.module.css';
import dcLogo from '../../assets/icons/dcLogo.svg';

export default function Navbar() {
   return (
      <div className={style.navbar}>
         <ul>
            <li><img src={dcLogo} alt=""/></li>
            <li>ASOSIY</li>
            <li>TEXNOPARK</li>
            <li>IT TA’LIM</li>
            <li>STARTAPLAR</li>
            <li>LOYIHALAR</li>
            <li>RAQAMLASHTIRISH</li>
            <li>BIZNES</li>
            <li>INFRATUZILMA</li>
            <li>UZ</li>
         </ul>
      </div>
   )
}