import { createSlice } from "@reduxjs/toolkit";
import { books } from "../mocks/books";

const initialState = {
  books,
};

const rootReducer = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      return state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, deleteBook } = rootReducer.actions;
export default rootReducer.reducer;
