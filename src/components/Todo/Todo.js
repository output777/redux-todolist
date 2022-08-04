import React from 'react';
import styled from 'styled-components';
import {deleteTodo, doneTodo} from '../../redux/modules/todo_app';
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
      <Detailview
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        style={{cursor: 'pointer'}}
      >
        상세페이지
      </Detailview>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Button
        borderColor="red"
        bacKgroundColor="red"
        color="#fff"
        style={{marginRight: '10px'}}
        onClick={() => {
          handleDelete(id);
        }}
      >
        삭제하기
      </Button>
      <Button
        borderColor="green"
        bacKgroundColor="green"
        color="#fff"
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
  border: 3px solid #008080;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
`;

const Button = styled.button`
  outline: none;
  border: 2px solid ${(props) => props.borderColor};
  background: inherit;
  width: 100px;
  padding: 0.5em 0.8em;
  border-radius: 8px;
  margin-right: 1em;
  color: #000;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    background: ${(props) => props.bacKgroundColor};
    color: ${(props) => props.color};
  }
`;

const Detailview = styled.p`
  &:hover {
    color: red;
  }
`;
