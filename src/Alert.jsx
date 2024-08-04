import {useEffect, useState} from 'react'

const Alert = () => {
    const [show, setShow] = useState(true)
    useEffect(() => {
        // Disable scrolling when alert is shown
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

  return (
    show && <div className='w-full h-dvh bg-white/10 backdrop-blur-lg fixed top-0 left-0 z-50 grid place-content-center'>
        <div className='w-[20rem] lg:w-[40rem] rounded-xl shadow-lg bg-white border-4 border-red-500 lg:h-[20rem] h-[16rem]'>
            <div className='w-full h-full flex flex-col justify-around items-center'>
                <img
                    src='https://static.vecteezy.com/system/resources/previews/005/476/277/non_2x/under-18-forbidden-round-icon-sign-illustration-eighteen-or-older-persons-adult-content-18-plus-only-rating-isolated-on-white-background-free-vector.jpg'
                    alt='alert adult content'
                    width={180}
                    height={180}
                    className='animate-pulse'
                />
                <div className='flex flex-row gap-5'>
                    <button 
                        className='bg-fuchsia-500 rounded-xl py-3 px-5 text-white font-bold'
                        onClick={()=>{setShow(false)}}>
                        Yes I'm 18+
                    </button>
                    <button 
                        className='bg-red-500 rounded-xl py-3 px-5 text-white font-bold'
                        onClick={() => {
                            window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
                        }}>
                        No, I'm not
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Alert
