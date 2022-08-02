import React from 'react';
import styled from 'styled-components';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const detailTodo = useSelector((state) => state.todo.todos).filter(
    (data) => data.id === parseInt(param.id)
  );
  return (
    <Container>
      <Box>
        <IdandBack>
          <p>ID: {detailTodo[0].id}</p>
          <p onClick={() => navigate('/')}>이전으로</p>
        </IdandBack>
        <h2>{detailTodo[0].title}</h2>
        <p>{detailTodo[0].desc}</p>
      </Box>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 500px;
  height: 350px;
  border: 1px solid black;
  padding: 1rem;
  box-sizing: border-box;
`;

const IdandBack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
