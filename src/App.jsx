import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "./reducers/rootReducer";

export default function App() {
  const book = useSelector((state) => state.books.find(book => book.id === 1).name);

  const dispatch = useDispatch();

  return <div class="container">{book}</div>;
}
