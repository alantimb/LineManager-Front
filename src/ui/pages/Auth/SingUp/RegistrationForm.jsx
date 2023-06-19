import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function RegistrationForm(props) {
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();

  function handleForm(event) {
    setData({ ...data, [event.target.type]: event.target.value })
  }

  function submit(event) {
    event.preventDefault();
    console.log(data);

    // navigate('/');
    try {
        // const response = await axios.post('http://localhost:4000/users/sign-up', data);

        navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
    
  if (props.userType === undefined) return <></>;

  return (
    <>
     <SignUpForm onSubmit={submit}>
        <input placeholder={`${props.userType === 'person' ? "Cpf" : "Cnpj"}`} type="cpf"  onChange={handleForm} />
        <input placeholder="Nome" type="name"  onChange={handleForm} />
        <input placeholder="E-mail" type="email"  onChange={handleForm} />
        <input placeholder="Senha" type="password"  onChange={handleForm} />
        <button type="submit">Cadastrar</button>
     </SignUpForm>
     <LinkToSignIn to="/sign-in" >Já tem cadastro? Então pule para a tela de login!</LinkToSignIn>
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