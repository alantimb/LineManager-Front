import { Link } from "react-router-dom";
import styled from "styled-components"

export default function AuthArea() {
    return (
        <AuthForms>
            <Link to="/sign-in">
                <button>Entrar</button>
            </Link>
            <Link to="/sign-up">
                <button>Inscrever-se</button>
            </Link>
            <div>C</div>
        </AuthForms>
    )
}

const AuthForms = styled.div`
    width: 240px;
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

    div {
        width: 20px;
        height: 20px;
        background-color: coral;
    }
`;
