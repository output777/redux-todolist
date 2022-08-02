import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  id: 0,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      action.payload['id'] = state.id;
      state.id++;
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((data) => data.id !== action.payload);
    },
    doneTodo: (state, action) => {
      state.todos = state.todos.filter((data) => {
        if (data.id === action.payload) {
          data.isDone = !data.isDone;
        }
        return data;
      });
    },
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice.reducer;
