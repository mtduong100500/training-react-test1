import React from 'react'
import { Fragment } from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

const PopUp = props => {
    console.log(props.data);
    return(
        <Fragment>
            <Modal isOpen={props.modalEdit}>
                <ModalHeader>
                    <div>
                        <h3>Edit</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={props.stateSelection && props.stateSelection.id}
                        />
                        

                        <label>Name</label>
                        <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={props.stateSelection && props.stateSelection.name}
                        onChange={props.handleChange}
                        />
                        

                        <label>Quantity</label>
                        <input
                        className="form-control"
                        type="text"
                        name="quantity"
                        value={props.stateSelection && props.stateSelection.quantity}
                        onChange={props.handleChange}
                        />
                        

                        <label>Seller Name</label>
                        <input
                        className="form-control"
                        type="text"
                        name="sellerName"
                        value={props.stateSelection && props.stateSelection.sellerName}
                        onChange={props.handleChange}
                        />
                        
                    </div>
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-primary" onClick={()=>props.editItem()}>
                    Update
                </button>
                <button
                    className="btn btn-danger"
                    onClick={()=>props.setmodalEdit(false)}
                >
                    Cancel
                </button>
                </ModalFooter>
            </Modal>


            <Modal isOpen={props.modalAdd}>
                <ModalHeader>
                <div>
                    <h3>Add Item</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                <div className="form-group">
                    <>Name</>
                    <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={props.stateSelection ? props.stateSelection.name: ''}
                    onChange={props.handleChange}
                    />
                    

                    <label>Quantity</label>
                    <input
                    className="form-control"
                    type="text"
                    name="quantity"
                    value={props.stateSelection ? props.stateSelection.quantity: ''}
                    onChange={props.handleChange}
                    />
                    

                    <label>Seller Name</label>
                    <input
                    className="form-control"
                    type="text"
                    name="sellerName"
                    value={props.stateSelection ? props.stateSelection.sellerName: ''}
                    onChange={props.handleChange}
                    />
                    
                </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary"
                    onClick={()=>props.setmodalConfirmAdd(true)}>
                        Add
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={()=>props.setmodalAdd(false)}
                    >
                        Cancel
                    </button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}

export default PopUp
