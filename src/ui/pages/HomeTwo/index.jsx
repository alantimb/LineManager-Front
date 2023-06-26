import styled from "styled-components";
import NavigationBar from "../../components/Navigation/NavBar";
import useToken from "../../../data/hooks/useToken";

export default function HomeTwo() {
  const token = useToken();

  if (!token) {
    return (
      <>OI</>
    )
  }
    return (
      <HomeLayout>
        <NavigationBar />
      </HomeLayout>
    );
  }
  
const HomeLayout = styled.div`
    height: 100%;
    width: 100%;
`;

