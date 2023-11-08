import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';





function App() {

  return (
      <div className="App">
        <div className='content'>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>

            <Route exact path='/' element={<Home />} />              {/*Handles page routing*/} 
            <Route path='/Create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      


        </div>
      </div>
    );
}

export default App;
