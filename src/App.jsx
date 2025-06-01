import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BookCreateContainer } from './container/book/BookCreate.container';
import { BookTableContainer } from './container/book/BookTable.container';

import './stylesheet/styles.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookTableContainer />} />
          <Route path="/books/add" element={<BookCreateContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
