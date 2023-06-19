import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import AuthArea from "./AuthArea";
import LineManagerLogo from "../../assets/images/LineManagerLogo.png"


export default function NavigationBar() {
    return (
        <NavBarContainer>
            <Link to="/">
                <HomeImg src={LineManagerLogo} />
            </Link>
            

            <SearchBar />

            <AuthArea />
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    width: 100vw;
    height: 54.5px;
    background-image: linear-gradient(to bottom, rgb(245, 245, 245), rgb(221, 234, 243), rgb(185, 223, 248));
    box-shadow: 0 4px 10px rgba(185, 223, 248, 1), 0 8px 20px rgba(185, 223, 248, 0.6);

    
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HomeImg = styled.img`
    width: 80px;
    margin-left: 10px;
`;
