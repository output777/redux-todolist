import React, {useState} from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import List from '../List/List';
import {useSelector, useDispatch} from 'react-redux';
import {todoAction} from '../../redux/features/todoSlice';

const Todolist = () => {
  const dispatch = useDispatch();
  const reduxToolkitTodolist = useSelector((state) => state.todo.todos);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      title: title,
      desc: desc,
      isDone: false,
    };
    dispatch(todoAction.addTodo(newTodo));
    setTitle('');
    setDesc('');
  };

  const handleTitle = (e) => {
    const {value} = e.target;
    setTitle(value);
  };

  const handleDesc = (e) => {
    const {value} = e.target;
    setDesc(value);
  };

  return (
    <div>
      <Layout>
        <Header />
        <Form
          handleSubmit={handleSubmit}
          handleTitle={handleTitle}
          handleDesc={handleDesc}
          title={title}
          desc={desc}
          sad
        />
        <List reduxToolkitTodolist={reduxToolkitTodolist} />
      </Layout>
    </div>
  );
};

export default Todolist;
