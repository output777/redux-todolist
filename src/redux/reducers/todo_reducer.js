// import {ADD_TODO, DELETE_TODO, DONE_TODO} from '../actions/types';

// const initialState = {
//   todos: [],
//   id: 0,
// };

// export default function todo(state = initialState.todos, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       action.payload['id'] = initialState.id;
//       initialState.id++;
//       return [...state, action.payload];
//     case DELETE_TODO:
//       state = state.filter((data) => data.id !== action.payload);
//       return [...state];
//     case DONE_TODO:
//       state = state.filter((data) => {
//         if (data.id === action.payload) {
//           data.isDone = !data.isDone;
//         }
//         return data;
//       });
//       return [...state];
//     default:
//       return state;
//   }
// }
