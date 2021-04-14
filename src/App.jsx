import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "./reducers/rootReducer";
import { SearchField } from "./components/Search";
import { Logo } from "./components/Logo";
import { Table } from "./components/Table";

export default function App() {
  const book = useSelector(
    (state) => state.books.find((book) => book.id === 1).name
  );

  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="search-bar">
          <SearchField />
        </div>
      </div>
      <div className="main-table">
        <Table />
      </div>
      <div className="footer">Footer...</div>
    </div>
  );
}
