import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './Pages/login'
import Signup from './Pages/signup';
import Forgetpass from './Pages/forgetpass';

function App() {
  return (
    <Routes>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/forget' Component={Forgetpass}/>
    </Routes>
  );
}

export default App;
