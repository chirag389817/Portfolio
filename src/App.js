import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Profile />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/about" element={<About />} />

                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
