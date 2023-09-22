import './Modal.css'

export const Modal = ({ children, handleClose }) => {
  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  )
}
