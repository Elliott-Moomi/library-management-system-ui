import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {BookTableContainer} from './container/book/BookTable.container';
import './stylesheet/styles.scss';


function App() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookTableContainer/>}/>
                </Routes>

            </BrowserRouter>
        </main>
    );
}

export default App;
