import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Instructions from './components/instructions/Instructions'

function App() {

  return (
    
    <BrowserRouter>
      <div className='min-h0screen bg-white pt-12 flex flex-col'>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
