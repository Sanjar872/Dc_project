import React from 'react';
import style from './styles/layout.module.css';
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import InfroTuzilma from "./components/Main/InfroTuzilma";

function App() {
   return (
      <div className={style.container}>
         <Navbar/>
         <Wrapper>
            <InfroTuzilma />
         </Wrapper>
      </div>
   );
}

export default App;
