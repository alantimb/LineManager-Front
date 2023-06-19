import React, { useState } from "react";
import styled from "styled-components";
import LineManagerLogo from "../../../assets/images/LineManagerLogo.png"
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBuildingsFill } from "react-icons/bs";
import RegistrationForm from "./RegistrationForm";

export default function SingUp() {
  const [chooseUser, setChooseUser] = useState(undefined);
  console.log(chooseUser);

  return (
    <SingUpContainer>
      <img src={LineManagerLogo} />

      <UserOptions>
        <UserOption
          isActive={chooseUser === "person"}
          onClick={() => {
            setChooseUser("person");
          }}
        >
          <BsFillPersonFill
            className="react-icons"
            isActive={chooseUser === "person"}
          />
        </UserOption>
        <UserOption
          isActive={chooseUser === "company"}
          onClick={() => {
            setChooseUser("company");
          }}
        >
          <BsFillBuildingsFill
            className="react-icons"
            isActive={chooseUser === "company"}
          />
        </UserOption>
      </UserOptions>


      <RegistrationForm userType={chooseUser} />
    </SingUpContainer>
  );
}

const UserOptions = styled.div`
  display: flex;
`;

const UserOption = styled.div`
    width: 50px;
    height: 50px;
    margin: 10px 20px;
    padding: 10px;
    background-color: ${({ isActive }) =>
      isActive ? "#cbcbcb" : "#fff"};
    border-radius: 100px;
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: lightblue;
      opacity: 0.4;
    }

    .react-icons {
      font-size: 40px;
      color: ${({ isActive }) =>
        isActive ? "#534d4d" : "#000"};
    }

`;

const SingUpContainer = styled.div`
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
