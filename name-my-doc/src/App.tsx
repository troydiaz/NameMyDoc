import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Instructions from './components/instructions/Instructions'
import Documentation from './components/documentation/Documentation'
import AboutMe from './components/aboutme/AboutMe'

function App() {

  return (
    <BrowserRouter>
      <div className='min-h0screen bg-white pt-12 flex flex-col'>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/aboutme" element={<AboutMe/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
