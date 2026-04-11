import { Routes, Route } from 'react-router-dom'
import TopNavBar from './components/TopNavBar'
import SideNavBar from './components/SideNavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import PhilosophyPage from './pages/PhilosophyPage'
import StackPage from './pages/StackPage'
import ConsultPage from './pages/ConsultPage'

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary w-full overflow-x-hidden">
      <ScrollToTop />
      <TopNavBar />
      <SideNavBar />

      <main className="md:ml-20 min-h-screen relative overflow-hidden bg-[#0A0A0A]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/stack" element={<StackPage />} />
          <Route path="/consult" element={<ConsultPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
