import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BookTableContainer } from './container/book/BookTable.container';
import { MemberTableContainer } from './container/member/MemberTable.container';

import './stylesheet/styles.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookTableContainer />} />
          <Route path="/members" element={<MemberTableContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
