import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0'>
          <button onClick={() => setColor('blue')} class="btn btn-info">Blue</button>
          <button onClick={() => setColor('green')} class="btn btn-success">Green</button>
          <button onClick={() => setColor('yellow')} class="btn btn-warning">Warning</button>
          <button onClick={() => setColor('red')} class="btn btn-error">Error</button>
          <button onClick={() => setColor('black')} class="btn btn-dark">Dark</button>
        </div>
      </div>
    </>
  )
}

export default App
