import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import useSignIn from "../../../../data/hooks/api/useSignIn";
import UserContext from "../../../../data/contexts/userContext";

export default function LogInForm() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const { signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);

    async function submit(event) {
      event.preventDefault();

      try {
        const userData = await signIn(loginData.email, loginData.password);

        setUserData(userData);
        console.log('Login realizado com sucesso!');
        navigate('/');
      } catch (error) {
        console.log("Não foi possível fazer o login!")
      }
    }

    return (
        <>
         <SignInForm onSubmit={submit}>
            <Input placeholder="E-mail" type="text" onChange={(e) => setLoginData({...loginData, email: e.target.value})} />
            <Input placeholder="Senha" type="password" onChange={(e) => setLoginData({...loginData, password: e.target.value})} />
            <Button>Entrar</Button>
         </SignInForm>
         <LinkToSignIn to="/sign-up" >Ainda não tem cadastro? Então clique aqui!</LinkToSignIn>
        </>
    );
}

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
      width: 360px;
      height: 50px;
      margin-bottom: 12px;
      border-radius: 5px;
      border: 1px solid #fff;
      color: #000;
      font-size: 18px;
      padding-left: 10px;
`;

const Button = styled.button`
    width: 360px;
    height: 50px;
    margin-bottom: 12px;
    border-radius: 5px;
    border: 1px solid #0036cc;
    color: #fff;
    background-color: #0036cc;
    font-size: 18px;

    &:hover {
      cursor: pointer;
      color: #000;
      background-color: lightblue;
      border: 1px solid lightblue;
      opacity: 0.6;
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