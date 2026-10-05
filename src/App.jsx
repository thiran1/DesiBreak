import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { ExploreDrinks } from './pages/ExploreDrinks'
import { DrinkDetails } from './pages/DrinkDetails'
import { About } from './pages/About'
import { OurStory } from './pages/OurStory'
import { Franchise } from './pages/Franchise'
import { Contact } from './pages/Contact'
import { Stores } from './pages/Stores'
import { NotFound } from './pages/NotFound'

const ENABLE_FRANCHISE = false

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drinks" element={<ExploreDrinks />} />
            <Route path="/explore" element={<ExploreDrinks />} />
            <Route path="/drinks/:slug" element={<DrinkDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/story" element={<OurStory />} />
            <Route path="/stores" element={<Stores />} />
            {ENABLE_FRANCHISE && (
              <Route path="/franchise" element={<Franchise />} />
            )}
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
