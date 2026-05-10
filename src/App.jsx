import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/footer/Footer";
import Notes from "./pages/Notes/Notes";
import NotFound from "./pages/Notfound/Notfound";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studymaterial" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-started" element={<h1>Get Started Page</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
