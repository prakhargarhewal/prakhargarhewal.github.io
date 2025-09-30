import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from '@/components/ui/toaster'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App