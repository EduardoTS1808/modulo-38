import React from 'react';
import { render } from '@testing-library/react';
import BasicAlerts from './index.js'; 

test('Teste de renderização do BasicAlerts', () => {
  const alertText = 'This is a test alert';
  const { getByText } = render(<BasicAlerts type="warning">{alertText}</BasicAlerts>);


  expect(getByText(alertText)).toBeInTheDocument();
});

