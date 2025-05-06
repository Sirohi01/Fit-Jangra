import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import '../src/styles/global.css';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Contact" element={<Contact />} />


            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
