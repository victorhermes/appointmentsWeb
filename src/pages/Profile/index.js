import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
    return (
        <Container>
            <Form>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" placeholder="Seu e-mail" />

                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Senha antiga"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="submit">Sair do sistema</button>
        </Container>
    );
}
