import styled from "styled-components";
import NavigationBar from "../../components/Navigation/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import useToken from "../../../data/hooks/useToken";

export default function Home() {
  const token = useToken();

  if (!token) {
    return (
      <HomeLayout>
        <NavigationBar />

        <SiteInformation>
          <h1>Bem-vindo(a) ao <span>LineManager</span></h1>
          <h2>A fila de espera virtual onde você não perde tempo!</h2>

          <p>Para começar a acessar uma fila, é preciso estar logado(a).</p>
        </SiteInformation>
      </HomeLayout>
    );
  }
  
    return (
      <HomeLayout>
        <NavigationBar />
  
        <Sidebar />
      </HomeLayout>
    );
  }
  
const HomeLayout = styled.div`
    height: 100%;
    width: 100%;
`;

const SiteInformation = styled.div`
  width: auto;
  height: 80vh;
  margin-top: 64.5px;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 42px;
    margin-bottom: 12px;

    span {
      color: orange;
    }
  }

  h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
  }
`;

