import './index.css'

function App() {
  return (
    <>
        <div className='container relative'>
            <div className='container'>
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
            </div>

            {/*Modal window*/}
            {/*<div className='fixed inset-0 bg-black/30 bacdrop-blur-md flex items-center justify-center'>*/}
            {/*    <div className='flex p-20 top-90 absolute bg-blue-600 text-white rounded-2xl'>*/}
            {/*        <h1>Modal window</h1>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis illo magnam!</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </>
  )
}

export default App
