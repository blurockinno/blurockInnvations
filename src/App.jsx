import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blg from './pages/Blog'
import Blog from './pages/BlogPage';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OurProduct from "./pages/OurProduct";
import OmsMembership from "./pages/OmsMembership";
import Service from "./pages/Service";
import Solution from "./pages/Solution";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import SplashScreen from "./components/splashscreen/SplashScreen";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if(isLoading){
    return <SplashScreen/>
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/oms-plan" element={<OmsMembership />} />
        <Route path="/service" element={<Service />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blg" element={<Blg />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/our-product" element={<OurProduct />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
