import React from "react";
import {Grid} from "@mui/material";
import style from '../../styles/main.module.css';
import map from '../../assets/icons/map.svg';

export default function InfroTuzilma() {
   return (
      <div className={style.container}>
         <div className={style.infra}>
            <p>INFRATUZILMA</p>
         </div>
         <div className={style.main}>
            <Grid container spacing={5}>
               <Grid item xs={12} sm={12} md={6} xl={6}>
                  <div className={style.itemContainer}>
                     <h3>Oʻzbekistondagi IT markazlar</h3>
                     <p>
                        Bugungi kunga qadar O‘zbekistonning ko‘plab hududlarida IT markazlari tashkil etilgan. Bundan
                        ko'zlangan maqsad qiziquvchan yoshlarni IT ta’limga rag'batlantirish, ularning innovatsion
                        loyihalarini qo'llab quvvatlash va aholi turmush sharoitini yaxshilash kabi masalalar ilgari
                        surilgan.
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} sm={12} md={6} xl={6}>
                  <div className={style.itemContainer}>
                     <img src={map} alt=""/>
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   )
}