import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "./reducers/rootReducer";
import { Search } from "./components/Search";


export default function App() {
  const book = useSelector(
    (state) => state.books.find((book) => book.id === 1).name
  );

  const dispatch = useDispatch();

  return <div className="main-container">
    <div className="header">
        <Search/>
    </div>
    <div className="main-table">{book}</div>
    <div className="footer">Footer...</div>
  </div>;
}
