import React, { useState } from 'react';

import { EmptyState } from '../empty-state/EmptyState';

import { BookCreateContainer } from '../../container/book/BookCreate.container';

import { Header } from '../header/Header';
import { BookRows } from './BookRows';

export const BookTable = ({ books }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <Header addBtn="Add Book" onAddClick={() => setIsAddModalOpen(true)} />
      {isAddModalOpen && <BookCreateContainer onClose={() => setIsAddModalOpen(false)} />}
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
          {books.length > 0 ? (
            <BookRows books={books} />
          ) : (
            <tr>
              <td colSpan={8}>
                <EmptyState message="No books found" />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
