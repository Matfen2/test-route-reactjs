import Header from "./Header"
import Games from "./Games"
import Bundle from "./Bundle"
import Whislist from "./Whislist"
import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
        <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/bundle" element={<Bundle />} />
        <Route path="/whislist" element={<Whislist />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App