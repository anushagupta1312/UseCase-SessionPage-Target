import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListSessions from './components/ListSessions'
import Navbar from './components/Navbar';
import AddSession from './components/AddSession';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ListSessions/>}></Route>
        <Route path='sessions' element={<ListSessions/>}></Route>
        <Route path='add-session' element={<AddSession/>}></Route>
        <Route path='update-session/:id' element={<AddSession/>}></Route>
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
