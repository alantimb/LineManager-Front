import React, { useState } from "react";
import styled from "styled-components";
import LineManagerLogo from "../../../assets/images/LineManagerLogo.png"
import LogInForm from "./LogInForm";

export default function SingIn() {
  


  return (
    <SingInContainer>
      <img src={LineManagerLogo} />


      <LogInForm />
    </SingInContainer>
  );
}


const SingInContainer = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  img {
    width: 240px;
    align-self: center;
  }
`;
