import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PrivateRoute from './Pages/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <PrivateRoute> <Home /></PrivateRoute>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
