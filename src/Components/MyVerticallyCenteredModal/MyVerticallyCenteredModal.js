import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap'
import AppContext from '../../Context/AppContext';

function MyVerticallyCenteredModal(props) {
    const { addSubmitted } = useContext(AppContext);
    const { name } = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {addSubmitted ? (
          <><Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {name}
            </Modal.Title>
          </Modal.Header><Modal.Body>
              <p>
                {name} com sucesso!
              </p>
            </Modal.Body></>
        ) : (
          <><Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Error
              </Modal.Title>
            </Modal.Header><Modal.Body>
                <p>
                  confira se todos os campos foram inseridos!
                </p>
              </Modal.Body></>
        )}
        
      </Modal>
    );
  }

export default MyVerticallyCenteredModal;

  