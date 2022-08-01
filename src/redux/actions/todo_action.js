import {ADD_TODO, DELETE_TODO, DONE_TODO, DETAIL_TODO} from './types';

export function addTodo(todolist) {
  return {
    type: ADD_TODO,
    payload: todolist,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function doneTodo(id) {
  return {
    type: DONE_TODO,
    payload: id,
  };
}

export function detailTodo(id) {
  return {
    type: DETAIL_TODO,
    payload: id,
  };
}
