import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Instructions from './components/instructions/Instructions'
import Documentation from './components/documentation/Documentation'
import AboutMe from './components/aboutme/AboutMe'
import Home from './components/home/Home'
import Upload from './components/upload/Upload'

function App() {

  return (
    <BrowserRouter>
      <div className ="antialiased">
        <div className='min-h0-screen bg-white pt-12 flex flex-col'>
          <Header />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/aboutme" element={<AboutMe/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/upload" element={<Upload/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
