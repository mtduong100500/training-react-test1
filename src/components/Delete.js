import React from 'react'
import { Fragment } from 'react'
import {Modal, ModalBody, ModalFooter} from 'reactstrap';

const Delete = props => {
    return (
        <Fragment>
            <Modal isOpen={props.modalDelete}>
                <ModalBody>
                Are you sure you want to delete this item {props.stateSelection && props.stateSelection.name}
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-danger" onClick={()=>props.deleteItem()}>
                    Yes
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={()=>props.setmodalDelete(false)}
                >
                    No
                </button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}

export default Delete
