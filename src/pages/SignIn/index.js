import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="Logo" />

            <form action="">
                <input type="email" placeholder="Digite seu e-mail" />
                <input type="password" placeholder="Digite sua senha" />

                <button type="submit">Enviar</button>

                <Link to="/signup">Cadastrar conta</Link>
            </form>
        </>
    );
}
