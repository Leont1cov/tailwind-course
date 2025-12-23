export default function Part2 () {
    return (
        <>
            <div className='container flex flex-col'>
                <input type='text'
                       placeholder='Enter email'
                       className='outline-0 border border-solid border-transparent
                       transition-colors ease-in duration-300 focus:border-blue-300'/>

                <button className="rounded-4xl bg-blue-600 mt-10 p-16 hover:bg-blue-950 transition-colors">Click</button>
            </div>
        </>
    )
}