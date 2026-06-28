import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { ExploreDrinks } from './pages/ExploreDrinks'
import { DrinkDetails } from './pages/DrinkDetails'
import { About } from './pages/About'
import { Franchise } from './pages/Franchise'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExploreDrinks />} />
            <Route path="/drinks/:slug" element={<DrinkDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
