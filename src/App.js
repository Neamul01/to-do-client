import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PrivateRoute from './Pages/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='home' element={
          <PrivateRoute><Home></Home></PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
