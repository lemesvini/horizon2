import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';

function ModalComp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Modal heading</ModalTitle>
        </ModalHeader>
        <ModalBody>Woohoo, you are reading this text in a modal!</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalComp;