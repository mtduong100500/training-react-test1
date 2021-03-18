import React, {Fragment} from 'react'
import {Modal, ModalBody, ModalFooter} from 'reactstrap';
const ConfirmAdd = props => {
    return (
        <Fragment>
            <Modal isOpen={props.modalConfirmAdd}>
                <ModalBody>
                Are you sure you want to add this item
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-danger" onClick={()=>props.addItem()}>
                    Yes
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={()=>props.cancelModal(false)}
                >
                    No
                </button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}

export default ConfirmAdd
