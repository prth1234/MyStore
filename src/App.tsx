import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/button'
import LoginPage from './pages/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <LoginPage/>
      </div>
      
    </>
  )
}

export default App
