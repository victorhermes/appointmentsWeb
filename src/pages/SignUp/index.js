import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string()
        .email('Insira o e-mail válido')
        .required('Campo obrigatório'),
    password: Yup.string().required('Senha obrigatório'),
});

export default function SignUp() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Criar conta</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <img src={logo} alt="Logo" />

            <Form schema={schema}>
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
