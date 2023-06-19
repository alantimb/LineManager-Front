import styled from "styled-components";
import NavigationBar from "../../components/Navigation/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home() {
  
    return (
      <HomeLayout>
        <NavigationBar />
  
        {/* <Sidebar /> */}
      </HomeLayout>
    );
  }
  
const HomeLayout = styled.div`
    height: 100%;
    width: 100%;
`;

