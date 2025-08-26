import { Routes, Route } from 'react-router-dom'
import TeamSection from './components/OurTeam'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home';

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    
    </div>
  )
}

export default App
