import React from 'react';
import styled from 'styled-components/macro';

const App = () => {
  return (
    <>
      <Main>
        <div>Created with styled components template</div>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
