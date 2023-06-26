import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <SidebarContainer visible={sidebarVisible}>
      <MenuButton onClick={toggleSidebar}>
        <AiOutlineMenu className="react-icons" />
      </MenuButton>
      
      <SubscribeNewLine visible={sidebarVisible} >Nova Fila</SubscribeNewLine>

    </SidebarContainer>
  );
}


const SidebarContainer = styled.div`
  width: ${({ visible }) => (visible ? "200px" : "40px")};
  height: 100%;
  margin: 10px;
  position: fixed;
  top: 54.5px;
  background-color: rgba(10, 19, 99, 0.4);
  transition: width 0.3s ease;
  overflow: hidden;
`;

const MenuButton = styled.button`
  position: absolute;
  top: 5px;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  opacity: 1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  .react-icons {
    font-size: 20px;
        
    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const SubscribeNewLine = styled.button`
  position: absolute;
  top: 60px;
  left: ${({ visible }) => (visible ? "0px" : "-100px")};
  width: 60px;
  height: 60px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  transition: left 0.3s ease;

  &:hover {
      cursor: pointer;
      background-color: #0056b3;
  }
`;