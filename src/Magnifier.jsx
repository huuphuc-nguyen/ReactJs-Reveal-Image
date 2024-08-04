import {useState, useEffect} from 'react'

const Magnifier = ({img, revealImg, revealSize}) => {

  // The revealSize in 

    const [showMagnifier, setShowMagnifier] = useState(false)
    // used to set position of magnifier relatively inside this component
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0})

    const handleMouseMove = (e) => {
        // left and top are distance of this component to sides of screen
        const {top, left } = e.target.getBoundingClientRect();
        
        // must subtract left and top to get position relatively to this component
        setCursorPosition({x: e.clientX - left, y: e.clientY - top})
    }

    const handleTouchMove = (e) => {
        const {top, left } = e.target.getBoundingClientRect();
        const touch = e.touches[0]
        
        // must subtract left and top to get position relatively to this component
        setCursorPosition({x: touch.clientX - left, y: touch.clientY - top})
    }

    // Need to set cursor position when mouse enter to get correct position
    // Incase page is loaded and mouse is already inside component, 
    //  if not set cursor position, magnifier will be shown at wrong position
    const handleMouseEnter = (e) => {
        const {top, left} = e.target.getBoundingClientRect();
        setCursorPosition({x: e.clientX - left, y: e.clientY - top})
    
        setShowMagnifier(true)
    }   

  return (
    <div 
        className='w-full h-full relative'
       >

       <img 
        src={img}
        className=' h-full w-full object-contain rounded-xl'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={()=>setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
      

        {/* Magnifier */}
        <div 
        // Set position and effect for magnifier
        style={{
            transform: showMagnifier ? 'scale(1)' : 'scale(0)',
            opacity: showMagnifier ? 1 : 0,
            position: 'absolute',
            left: `${cursorPosition.x - revealSize/2}px`,
            top: `${cursorPosition.y - revealSize/2}px`,
            pointerEvents: 'none',
            zIndex: 1000,
            transition: 'opacity 0.2s ease-in-out',
            backgroundImage: `url(${revealImg})`,
            backgroundPosition: ` ${cursorPosition.x < revealSize/2 ?'':'-'}${Math.abs(cursorPosition.x - revealSize/2)}px ${cursorPosition.y < revealSize/2 ?'':'-'}${Math.abs(cursorPosition.y-revealSize/2)}px`,
            backgroundRepeat: 'no-repeat',
            height: `${revealSize}px`,
            width: `${revealSize}px`,
        }}
        className={` border-2 rounded-full  border-primary`}>
      </div>

    </div>
  )
}
export default Magnifier
