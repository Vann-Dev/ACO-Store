import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Home from './pages/home';
import Product from './pages/product';
import Store from './pages/store';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
