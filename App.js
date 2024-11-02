import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
<>
<Header/>
<Home/>
<main>
  <Outlet/>
</main>
<Footer/>
</>
  );
}

export default App;
