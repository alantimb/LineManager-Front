import React, { useState } from "react";
import styled from "styled-components";

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <SidebarContainer visible={sidebarVisible}>
      <FloatingButton onClick={toggleSidebar}>Abrir</FloatingButton>
      {/* Conteúdo da sidebar */}
    </SidebarContainer>
  );
}


const SidebarContainer = styled.div`
  width: ${({ visible }) => (visible ? "200px" : "40px")};
  height: 100%;
  margin: 10px;
  position: fixed;
  top: 54.5px;
  background-color: rgba(0, 0, 0, 0.8); /* Cor de fundo mais escura */
  transition: width 0.3s ease;
  overflow: hidden;
`;

const FloatingButton = styled.button`
  position: absolute;
  top: 5px;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
