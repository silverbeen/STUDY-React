import React, { useState } from "react";
import { lion, 미니언즈 } from "../../assets/index";
import * as S from "../style";

const Mouse: React.FC = () => {
  
  const mouseLocation = (e: MouseEvent) => {
    //const circle = document.getElementById("circle");
    
    const x = e.clientX;
    const y = e.clientY;
    /* window && window.circle.style.transform =
      "translate(" + x / 380 + "vw," + y / 150 + "vh)"; */
  };

  return (
    <S.MainWrapper>
      <div className="button-wrapper"></div>
      <S.MouseWrapper onMouseMove={mouseLocation}>
        <img src={미니언즈} />
        <div id="circle" />
      </S.MouseWrapper>
    </S.MainWrapper>
  );
};

export default Mouse;
