import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {styles } from './Hoge.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles}>
      test
    </div>
  )
}

export default App
