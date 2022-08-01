import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <p>My Todo List</p>
      <p>React</p>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-itmes: center;
  border: 1px solid #ccc;
  justify-content: space-between;
  padding: 1rem;
`;
