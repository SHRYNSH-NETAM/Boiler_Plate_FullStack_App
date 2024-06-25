import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import ErrorPage from './Pages/errorpage';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Forgetpass from './Pages/forgetpass';
import ProtectedRoute from './Utils/ProtectedRoute';


function App() {
  return (
    <Routes>
      <Route path='*' element={<ErrorPage />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forget' element={<Forgetpass />} />
    </Routes>
  );
}

export default App;