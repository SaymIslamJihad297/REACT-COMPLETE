import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName.jsx'
import TodoList from './components/TodoList.jsx'
import TodoItem from './components/TodoItem.jsx'

function App() {

  return (
    <center>
      <AppName></AppName>
      <TodoList></TodoList>


      <TodoItem todoText={"Buy Milk"} TodoDate={"4/10/24"}></TodoItem>
      <TodoItem todoText={"Go to college"} TodoDate={"4/10/24"}></TodoItem>

    </center>
  )
}

export default App
