import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira o e-mail válido')
        .required('Campo obrigatório'),
    password: Yup.string().required('Senha obrigatório'),
});

export default function SignIn() {
    const dispatch = useDispatch();

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="Logo" />

            <Form schema={schema} onSubmit={handleSubmit}>
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
