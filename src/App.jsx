import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {BookTableContainer} from './container/book/BookTable.container';
import './stylesheet/styles.scss';


function App() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookTableContainer/>}/>
                    <Route path="/manage" element={<div>my management</div>}/>
                    {random()}
                </Routes>

            </BrowserRouter>
        </main>
    );
}

const random=()=>{
    return (
        <Route path="/test" element={<div>my test</div>} >
            <Route path="test/nuts" element={<div>deez nuts</div>}/>
        </Route>
    );

}
export default App;
