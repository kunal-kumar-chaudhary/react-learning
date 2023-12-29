import {useState} from "react"
function App() {
  // as our initial state is olive, if we refresh the page the background color will be olive
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          // if we directly pass the setColor() function in onClick then it will be called as soon as the page loads and the returned value would be passed to the onClick(), but our onClick() function is a unique function, it expects a function inside of it, because it's a callback function.
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}}
          >Green</button>
          <button
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'blue'}}
          >Blue</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
