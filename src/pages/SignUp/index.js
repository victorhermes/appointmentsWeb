import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="Logo" />

            <Form>
                <Input name="name" type="text" placeholder="Nome completo" />
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

                <button type="submit">Criar conta</button>

                <Link to="/">Acessar dashboard</Link>
            </Form>
        </>
    );
}
