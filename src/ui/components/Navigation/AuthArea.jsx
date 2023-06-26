import { Link } from "react-router-dom";
import styled from "styled-components"
import { RiLogoutCircleRLine } from "react-icons/ri";
import useToken from "../../../data/hooks/useToken";

export default function AuthArea() {
    const token = useToken();

    if (!token) {
        return (
            <AuthForms isToken={true} >
                <Link to="/sign-in">
                    <button>Entrar</button>
                </Link>
                
                <Link to="/sign-up">
                    <button>Inscrever-se</button>
                </Link>
                
                {/* <Link to="/home-two">
                    <BsFillGearFill className="react-icons" />
                </Link> */}
            </AuthForms>
        )
    }
    
    return (
        <AuthForms isToken={false} >
            <Link to="/home-two">
                <RiLogoutCircleRLine className="react-icons" />
            </Link>
        </AuthForms>
    )
}

const AuthForms = styled.div`
    width: ${(props) => props.isToken ? '180px' : '20px'};
    margin-right: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: auto;
        height: 40px;
        padding: 10px;
        color: white;
        background-color: blue;

        font-size: 14px;
        font-weight: 700;
    }

    .react-icons {
        font-size: 20px;
        
        &:hover {
            cursor: pointer;
        }
    }
`;
