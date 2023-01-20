import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Users from './Pages/Users';
import Add from './Pages/AddContact';
import Edit from './Pages/EditContact';
import Error from './Pages/Errors';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/users' element = {<Users/>} />
      <Route path='/add' element = {<Add/>} />
      <Route path='/edit/:_id' element = {<Edit/>} />
      <Route path='/*' element = {<Error/>} />
    </Routes>
    
    </div>
  );
}

export default App;
