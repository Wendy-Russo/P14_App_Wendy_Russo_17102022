import { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root')

function ModalPlugin() {


  const[modal,setModal] = useState(0)

  
  function handleOpenModal () {
    setModal({ showModal: true });
  }
  
  function handleCloseModal() {
    setModal({ showModal: false });
  }
  
  return (
  <div>
    <button onClick={handleOpenModal}>Trigger Modal</button>
    <ReactModal 
      isOpen={modal.showModal}
      contentLabel="Minimal Modal Example">

    <button onClick={handleCloseModal}>Close Modal</button>
    </ReactModal>
  </div>
  )
}

  
export default ModalPlugin;