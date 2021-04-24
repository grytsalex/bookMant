import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addBook, deleteBook } from "./reducers/rootReducer";
import { SearchField } from "./components/Search";
import { Logo } from "./components/Logo";
import { Table } from "./components/Table";
import { AboutFooter } from "./components/About";

export default function App() {
  const books = useSelector(
    (state) => state.books
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
        <Table books={books} />
      </div>
      <div className="footer">
        <AboutFooter/>
      </div>
    </div>
  );
}
