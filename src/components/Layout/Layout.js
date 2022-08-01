import React from 'react';
import styled from 'styled-components';

const Layout = ({children}) => {
  return <Todolist>{children}</Todolist>;
};

export default Layout;

const Todolist = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;
