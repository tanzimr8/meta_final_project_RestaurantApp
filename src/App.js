import './App.css';
import Nav from './Nav';
import HomePage from './components/Homepage';
import BookingPage from './components/BookingPage';
import {Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <>
      <Nav/>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      
    </>
  );
}

export default App;

