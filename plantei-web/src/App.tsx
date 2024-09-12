import Error from "@Pages/Error/Error";
import Footer from "@Components/Footer/Footer"
import Home from "@Pages/Home/Home"
import Register from "@Pages/Register/Register"
import Product from "@Pages/Product/Product";
import Header from "@Components/Header/Header";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/product" element={<Product />} /> 
          <Route path="/*" element={<Error />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;