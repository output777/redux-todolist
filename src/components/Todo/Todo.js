import React from 'react';
import styled from 'styled-components';
import {deleteTodo, doneTodo} from '../../redux/actions/todo_action';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Todo = ({id, title, desc, isDone}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCompleted = (id) => {
    dispatch(doneTodo(id));
  };

  return (
    <Box>
      <p
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        style={{cursor: 'pointer'}}
      >
        상세페이지
      </p>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Button
        style={{marginRight: '10px'}}
        onClick={() => {
          handleDelete(id);
        }}
      >
        삭제하기
      </Button>
      <Button
        onClick={() => {
          handleCompleted(id);
        }}
      >
        {isDone === false ? '완료' : '취소'}
      </Button>
    </Box>
  );
};

export default Todo;

const Box = styled.div`
  width: 250px;
  height: 200px;
  border: 3px solid green;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 80px;
  height: 30px;
`;
