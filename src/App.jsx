import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BookCreateContainer } from './container/book/BookCreate.container';
import { BookTableContainer } from './container/book/BookTable.container';
import { MemberCreateContainer } from './container/member/MemberCreate.container';
import { MemberTableContainer } from './container/member/MemberTable.container';

import './stylesheet/styles.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookTableContainer />} />
          <Route path="/books/add" element={<BookCreateContainer />} />
          <Route path="/members" element={<MemberTableContainer />} />
          <Route path="/members/add" element={<MemberCreateContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
