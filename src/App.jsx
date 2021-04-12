import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "./reducers/rootReducer";

export default function App() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  return <div>{books}</div>;
}
