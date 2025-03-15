import React from 'react';

import { Header } from '../header/Header';
import { BookRows } from './BookRows';

export const BookTable = ({ books }) => {
  return (
    <>
      <Header addBtn="Add Book" addPath="/books/add" />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Quantity</th>
            <th>Publication Date</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          <BookRows books={books} />
        </tbody>
      </table>
    </>
  );
};
