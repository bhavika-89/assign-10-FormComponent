import { useState } from 'react'
import FormComponent from "./Components/FormComponent"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
      <FormComponent />
    </div>
  )
}

export default App
