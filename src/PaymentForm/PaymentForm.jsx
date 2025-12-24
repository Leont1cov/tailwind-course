const PaymentForm = () => {
    return (
        <>
            <div className='container flex flex-col p-10 bg-blue-100 text-black text-2xl'>
                <section className='container p-10 rounded-2xl bg-white mb-10'>
                    <div className='text-gray-600 font-medium mb-3 text-xl'>Your balance</div>
                    <div className='flex gap-1 items-center'>
                        <div className='rounded-full w-9 h-9 flex items-center justify-center
                        bg-yellow-500 font-bold text-orange-500 italic text-xl shadow'>V</div>
                        <h1 className='text-4xl 0 font-bold'>$1,878<strong className='text-gray-600 font-medium'>.67</strong></h1>
                    </div>
                        <button className='flex gap-3 mt-8 bg-blue-600 text-white p-20 pt-5 pb-5 rounded-2xl text-xl
                        hover:bg-blue-700 transition-colors duration-300'>
                            <span className=''>+</span>
                            Buy credits
                        </button>
                </section>

                <section className='container p-10 rounded-2xl bg-white'>
                    <div className='flex justify-between text-xl mb-3'>
                        <div className='font-medium'>Payment cards</div>
                        <a href="#" className='flex gap-2 list-none text-blue-600 hover:text-blue-700'>
                            <span>+</span>
                            Add card
                        </a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                            <img className='w-16 h-9 rounded mt-5' src="../../public/visa-payment-card.jpg" alt="visa" />
                            <div className='flex flex-col justify-end'>
                                <div className='flex text-xl gap-3'>
                                    <div className='font-medium text-base'>Domen Kraij</div>
                                    <div className='p-1 bg-blue-100 rounded-lg text-xs text-blue-700 font-medium'>Primary</div>
                                </div>
                                <div className='text-xs text-gray-600 font-bold'>****6775</div>
                            </div>
                            <a href='#' className='flex items-center text-gray-600 font-medium ml-auto'>&gt;</a>
                        </div>
                        <div className='flex gap-3'>
                            <img className='w-16 h-9 rounded mt-5' src="../../public/Mastercard-Symbol.jpg" alt="visa" />
                            <div className='flex flex-col justify-end'>
                                <div className='flex text-xl gap-3'>
                                    <div className='font-medium text-base'>Domen Kraij</div>
                                </div>
                                <div className='text-xs text-gray-600 font-bold'>****3009</div>
                            </div>
                            <a href='#' className='flex items-center text-gray-600 font-medium ml-auto'>&gt;</a>
                        </div>
                    </div>
                    <div className='mt-10 bg-green-200 rounded-lg'>
                        <p className='text-base p-5'>
                            We're fully compliant with the payment card <br/>
                            industry data security standards.
                        </p>
                    </div>
                </section>

            </div>
        </>
    )
}

export default PaymentForm;