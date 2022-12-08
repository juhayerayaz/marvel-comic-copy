import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
