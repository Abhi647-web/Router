import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componenets/Login';
import Signup from './Componenets/Signup';
import Dashboard from './Componenets/Dashboard';
import Tasks from './Componenets/Tasks';
import Leaves from './Componenets/Leaves';
import PageNotFound from './Componenets/PageNotFound';
import TopNavigation from './Componenets/TopNavigation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/Tasks" element={<Tasks/>}></Route>
      <Route path="/Leaves" element={<Leaves/>}></Route>
      <Route path="/TopNavigation" element={<TopNavigation />}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
      
    </Routes>
    </BrowserRouter>

  );
}

export default App;
