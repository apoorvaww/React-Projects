import { useState } from 'react'
import Navbar from './components/Navbar'
import ContactHeader from './components/ContactHeader'
import ContactBody from './components/ContactBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ContactHeader />
      <ContactBody />
    </>
  )
}

export default App
