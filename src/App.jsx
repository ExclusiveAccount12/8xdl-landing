import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Disclaimer from './pages/Disclaimer'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Permissions from './pages/Permissions'
import BugReport from './pages/BugReport'
import SuggestFeature from './pages/SuggestFeature'
import Features from './pages/Features'
import TorrentX from './pages/TorrentX'

function App() {
  return (
    <Router>
      <div className="app">
        <AnimatedBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/bug-report" element={<BugReport />} />
          <Route path="/suggest-feature" element={<SuggestFeature />} />
          <Route path="/features" element={<Features />} />
          <Route path="/8xdl" element={<TorrentX />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
