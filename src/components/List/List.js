import React from 'react';
import styled from 'styled-components';
import Todo from '../Todo/Todo';

const List = ({reduxTodolist}) => {
  return (
    <Container>
      <Heading>Working..🔥</Heading>
      <ListBox>
        {reduxTodolist.map((data) =>
          data.isDone === false ? (
            <Todo
              key={data.id}
              title={data.title}
              desc={data.desc}
              id={data.id}
              isDone={data.isDone}
            />
          ) : null
        )}
      </ListBox>
      <Heading>Done..! ✨</Heading>
      <ListBox>
        {reduxTodolist.map((data) =>
          data.isDone === true ? (
            <Todo
              key={data.id}
              title={data.title}
              desc={data.desc}
              id={data.id}
              isDone={data.isDone}
            />
          ) : null
        )}
      </ListBox>
    </Container>
  );
};

export default List;

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 2rem;
`;

const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
