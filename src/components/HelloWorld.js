import React from 'react';
import glamorous from 'glamorous';

const Title = glamorous.h1({
  color: '#3273dc',
  fontSize: '2rem',
});

const Hello = () => (
  <Title>
    Hola Amigos
  </Title>
);

export default Hello;

