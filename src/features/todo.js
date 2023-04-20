import { createSlice } from "@reduxjs/toolkit";

export const todoSLice = createSlice({
  name: "todo",
  initialState: { value: [] },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.value.map((t) => {
        if (t.id === action.payload.id) {
          t.title = action.payload.title;
          t.desc = action.payload.desc;
        }
        return state.value;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSLice.actions;

export default todoSLice.reducer;
