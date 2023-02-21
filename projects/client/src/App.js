import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarUser from './components/navbarUser/navbarUser';
import Home from './pages/home/home.jsx';
import Footer from './components/homeUser/footer/footer';

function App() {
  return (
    <>
      <NavbarUser />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
