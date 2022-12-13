import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
