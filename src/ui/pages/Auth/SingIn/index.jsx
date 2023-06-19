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

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 360px;
      height: 50px;
      margin-bottom: 12px;
      border-radius: 5px;
      border: 1px solid #fff;
      color: #000;
      font-size: 18px;
      padding-left: 10px;
    }

    button {
      width: 360px;
      height: 50px;
      margin-bottom: 12px;
      border-radius: 5px;
      border: 1px solid #3B7BFF;
      color: #000;
      background-color: #3B7BFF;
      font-size: 18px;

      &:hover {
      cursor: pointer;
      background-color: lightblue;
      opacity: 0.6;
      }
    }
  }
`;
