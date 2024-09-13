import Error from "@Pages/Error/Error";
import Footer from "@Components/Footer/Footer";
import Home from "@Pages/Home/Home";
import Register from "@Pages/Register/Register";
import Header from "@Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { ClerkProvider} from "@clerk/clerk-react";
import PrivateRoute from "@Routes/PrivateRoute";
import SignInPage from "@Components/SignIn/SignIn";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
function App() {
  const clerkFrontendApi = PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Protegendo a rota /register */}
          <Route
            path="/register"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          />
          <Route path="/products" element={<Error />} />
          <Route path="/about-us" element={<Error />} />
          <Route path="/*" element={<Error />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
