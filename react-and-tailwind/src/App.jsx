import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500'>hello</h1>
      <div className='flex gap-5'>
        <Card cardTitle={"Spiderman"} cardImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58lR9iyBhca-qNp4qnAE1hKw_C0ExQLdTkw&s"} cardDescription={"Spider man is awesome"} />
        <Card cardTitle={"Spiderman2"} cardImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58lR9iyBhca-qNp4qnAE1hKw_C0ExQLdTkw&s"} cardDescription={"Spider man is awesome2"} />
      </div>


    </>
  )
}

export default App
