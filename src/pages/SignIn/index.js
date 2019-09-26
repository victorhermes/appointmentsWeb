import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="Logo" />

            <Form>
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                />

                <button type="submit">Enviar</button>

                <Link to="/signup">Cadastrar conta</Link>
            </Form>
        </>
    );
}
