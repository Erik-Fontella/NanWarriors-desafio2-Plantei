import Error from "@Pages/Error/Error";
import Footer from "@Components/Footer/Footer"
import Home from "@Pages/Home/Home"
import Register from "@Pages/Register/Register"
import Header from "@Components/Header/Header";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/products" element={<Error />} /> 
          <Route path="/*" element={<Error />} /> 
          <Route path="/about-us" element={<Error/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;