import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*^-_+=`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

      setPassword(pass);
    }

  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipBoard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("Password Copied");
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className='w-full h-screen'>
      <div className='w-full max-w-md mx-auto text-orange-400 bg-gray-700 rounded-lg my-8 p-5'>
        <h1 className='text-white text-3xl font-bold text-center mb-5'>React password Generator</h1>
        <div className='flex'>
          <input type="text" value={password} className='rounded-l-xl outline-none w-full py-2 px-3 bg-white' readOnly placeholder='Password' />
          <button className='bg-orange-400 text-white font-bold rounded-r-2xl p-2' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div>
          <div className='flex gap-2'>
            <div className='flex flex-col'>
              <input onChange={(e) => setLength(e.target.value)} type="range" min={8} max={100} value={length} id="" name='lengthpass' className='cursor-pointer' />
              <label htmlFor="lengthpass">Length: {length}</label>
            </div>
            <div>
              <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
              <label htmlFor="">Numbers</label>
            </div>
            <div>
              <input type="checkbox" defaultChecked={charAllowed} onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
              <label htmlFor="">Charecters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
