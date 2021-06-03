import React from 'react';
import styled from 'styled-components/macro';
import H2 from './components/atoms/H2';

const H1 = styled.h1 `
font-family: "Cabin";
font-style: 700;
`

const App = () => {
  return (
    <>
      <Main>
        <div>Created with styled components template</div>
        <H2>Hola</H2>
        <H1>Hola</H1>

        
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
