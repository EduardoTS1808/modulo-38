import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title'; // Importe o componente a ser testado

test('Teste de renderização do Title', () => {
  const titleText = 'Test Title';
  const { getByText } = render(<Title>{titleText}</Title>);

  // Verifique se o texto do título está presente
  expect(getByText(titleText)).toBeInTheDocument();
});
