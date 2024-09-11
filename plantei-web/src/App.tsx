
import Error from "@Pages/Error/Error";
import Footer from "@Components/Footer/Footer"
import Home from "@Pages/Home/Home"
import Register from "@Pages/Register/Register"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


