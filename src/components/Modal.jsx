import React, {useState, useRef} from 'react'

const Modal = ({fn, open}) => {
       
        const ref = useRef()

        const handleClose =(event) => {
               // if (ref.current && !ref.current.contains(event.target)) {
                        fn(false)
                //}
                
        }
  return (<>
        {open ? (<div className="modal">
        <div className='modal-content'>
               <div ref={ref} onClick={handleClose}>X</div>
                <span>Employee Created!</span>
        </div>
    </div>): null}</>
  )
}

export default Modal