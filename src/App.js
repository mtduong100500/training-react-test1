import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {

  const dataSample = [
    { id: 1, name: "Mai Thai Duong", quantity: 20, sellerName: "Duong" },
    { id: 2, name: "Do Huy Hung", quantity: 10, sellerName: "Duong" },
    { id: 3, name: "Tran Tien Dat", quantity: 1, sellerName: "Duong"},
    { id: 4, name: "Pham Quang Huy", quantity: 100, sellerName: "Duong"},
    
  ];

  const [data, setData] = useState(dataSample);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalDelete, setmodalDelete] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [stateSelection, setstateSelection] = useState({
    id: '',
    name: '',
    quantity: '',
    sellerName: '',
  });

  // decide which state we clicked 
  const selectState=(element, option)=>{
    setstateSelection(element);
    (option==='Edit')?setmodalEdit(true):setmodalDelete(true)
  }

  // change data when updating and adding
  const handleChange=(e)=>{
    const {name, value}=e.target;
    setstateSelection((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  // Edit item
  const editItem=()=>{
    var newData=data;
    newData.map(state=>{
      if(state.id===stateSelection.id){
        state.quantity=stateSelection.quantity;
        state.name=stateSelection.name;
        state.sellerName=stateSelection.sellerName;
      }
    });
    setData(newData);
    setmodalEdit(false);
  }

  // delete item
  const deleteItem =()=>{
    setData(data.filter(state=>state.id!==stateSelection.id));
    setmodalDelete(false);
  }


  // open form ADD
  const openModalAdd=()=>{
    setstateSelection(null);
    setmodalAdd(true);
  }

  // add item
  const addItem =()=>{
    var addItemValue=stateSelection;
    addItemValue.id=data[data.length-1].id+1;
    var newData = data;
    newData.push(addItemValue);
    setData(newData);
    setmodalAdd(false);
  }

  return (
    <div className="App" className="d-flex align-items-center justify-content-center flex-column">
      <h2>Final Test</h2>
      <br />
    <div className="d-flex justify-content-around m-3">
      <input type="text"/>
      <button className="btn btn-success" onClick={()=>openModalAdd()}>Add Item</button>
    </div>
    <br /><br />
    <div>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Seller Name</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {data.map(element=>(
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.quantity}</td>
              <td>{element.sellerName}</td>
              <td><button className="btn btn-primary" onClick={()=>selectState(element, 'Edit')}>Edit</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>selectState(element, 'Delete')}>Delete</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEdit}>
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
              value={stateSelection && stateSelection.id}
            />
            <br />

            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={stateSelection && stateSelection.name}
              onChange={handleChange}
            />
            <br />

            <label>Quantity</label>
            <input
              className="form-control"
              type="text"
              name="quantity"
              value={stateSelection && stateSelection.quantity}
              onChange={handleChange}
            />
            <br />

            <label>Seller Name</label>
            <input
              className="form-control"
              type="text"
              name="sellerName"
              value={stateSelection && stateSelection.sellerName}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editItem()}>
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setmodalEdit(false)}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalDelete}>
        <ModalBody>
        Are you sure you want to delete this item {stateSelection && stateSelection.name}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>deleteItem()}>
            Yes
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setmodalDelete(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal>
        <ModalBody>
          Are you sure you want to add this item {stateSelection && stateSelection.name}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>deleteItem()}>
            Yes
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setmodalDelete(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalAdd}>
        <ModalHeader>
          <div>
            <h3>Add Item</h3>
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
              value={data[data.length-1].id+1}
            />
            <br />

            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={stateSelection ? stateSelection.name: ''}
              onChange={handleChange}
            />
            <br />

            <label>Quantity</label>
            <input
              className="form-control"
              type="text"
              name="quantity"
              value={stateSelection ? stateSelection.quantity: ''}
              onChange={handleChange}
            />
            <br />

            <label>Seller Name</label>
            <input
              className="form-control"
              type="text"
              name="sellerName"
              value={stateSelection ? stateSelection.sellerName: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>addItem()}>
            Add
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setmodalAdd(false)}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
  );
}

export default App;
