import './index.css'

function App() {
  return (
    <>
        {/*Base*/}
        <h1 className='text-7xl font-bold text-emerald-100 '>Hello Talwind!</h1>
        <button className="rounded-4xl bg-blue-600 mt-10 p-16 hover:bg-blue-950">Click</button>

        {/*Border*/}
        <div className='border-2 border-blue-300 border-solid mt-3'></div>

        {/*Flex and Grid containers*/}
        <div className='flex justify-center gap-40'>
            <div className='bg-blue-950 w-30 h-30'/>
            <div className='bg-blue-950 w-30 h-30'/>
        </div>
        <div className='grid grid-cols-2'>
            <div className='bg-amber-950 w-30 h-30'/>
            <div className='bg-amber-950 w-30 h-30'/>
        </div>
    </>
  )
}

export default App
