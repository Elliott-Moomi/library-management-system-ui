import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RegisterContainer } from './container/auth/Register.container';
import { BookTableContainer } from './container/book/BookTable.container';
import { MemberTableContainer } from './container/member/MemberTable.container';

import './stylesheet/styles.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterContainer />} />
          <Route path="/books" element={<BookTableContainer />} />
          <Route path="/members" element={<MemberTableContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
