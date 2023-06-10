import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RegistrationForm(props) {
    if (props.userType === undefined) return <></>;
    
    return (
        <>
         <SignUpForm>
            <input placeholder={`${props.userType === 'person' ? "Cpf" : "Cnpj"}`} type="text" />
            <input placeholder="Nome" type="text" />
            <input placeholder="E-mail" type="text" />
            <input placeholder="Senha" type="text" />
            <button>Cadastrar</button>
         </SignUpForm>
         <LinkToSignIn to="" >Já tem cadastro? Então pule para a tela de login!</LinkToSignIn>
        </>
    );
}

const SignUpForm = styled.div`
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
`;

const LinkToSignIn = styled(Link)`
  color: darkblue;
  opacity: 1;

  &:hover {
    color: lightblue;
    opacity: 0.4;
  }
`;