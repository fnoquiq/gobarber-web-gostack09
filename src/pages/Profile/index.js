import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />

        <hr />

        <Input
          name="password"
          type="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Sua nova senha" />
        <Input
          name="password"
          type="confirmPassword"
          placeholder="Confirme sua senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
