export default function Part2 () {
    return (
        <>
            <div className='container flex flex-col'>
                <input type='text'
                       placeholder='Enter email'
                       className='outline-0 border border-solid border-transparent
                       transition-colors ease-in duration-300 focus:border-blue-300'/>

                <button className="rounded-4xl bg-blue-600 mt-10 p-16 hover:bg-blue-950 transition-colors">Click</button>

                {/*Adaptive */}
                <div className='mx-auto flex justify-center items-center
                w-30 h-25 mt-10 text-center bg-blue-950 rounded shadow font-bold
                transition-colors duration-300 md:bg-blue-600 lg:bg-amber-600 xl:bg-amber-50 2xl:bg-green-400'>
                    ADAPTIVE
                </div>

                {/*Работа с iframe*/}
                <div className='perspective-distant'>
                    <iframe
                        src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
                        className='mt-10 w-full h-full aspect-video transform-3d rotate-z-10 rotate-x-20'
                    />
                </div>
            </div>
        </>
    )
}