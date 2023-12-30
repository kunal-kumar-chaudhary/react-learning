import { useState, useCallback, useEffect, useRef } from 'react'

// useCallback is used to memoize the function, so that it is not re-rendered again and again
// useEffect is used to run the function only when the dependency array changes
// useRef is used to store the previous value of the dependency array

function App() {
  const [length, setlength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null);

  // even a slight change in the state of any dependency will cause the function to re-render
  // this hook is not just responsible for running our function, but also for memoization in which we store the variables in cache. 
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    // setting the password variable to the updated password 
    setPassword(pass);

  }
  // here in the dependency array, even if we don't pass setPassword, 
  // it will still work. we have used for optimizization as at the backend memoization
  //  concept is used, there we want to pass a function where variable is being set.
  , [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef} />
        <button
        onClick= {copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
           <input type="checkbox"
           defaultChecked={numberAllowed}
           id="numberInput"
           onChange={()=> {setNumberAllowed((prev)=> !prev)}} />
            <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
           <input type="checkbox"
           defaultChecked={charAllowed}
           id="characterInput"
           onChange={()=> {setCharAllowed((prev)=> !prev)}} />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
