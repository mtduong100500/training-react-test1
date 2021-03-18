import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from './components/DataTable';
import PopUp from './components/PopUp';
import Delete from './components/Delete';
import ConfirmAdd from './components/ConfirmAdd';

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
  const [modalConfirmAdd, setmodalConfirmAdd] = useState(false);
  const [modalCancel, setmocalCancel] = useState(false);
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

  // Close both add form and confirm popup
  const cancelModal=()=>{
    setmodalAdd(false);
    setmodalConfirmAdd(false);
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
    setmodalConfirmAdd(false);
  }

  return (
    <div className="App" className="d-flex justify-content-center flex-column">
      <h2 className="text-center m-2 fw-bold">Final Test</h2>
      <div className="d-flex justify-content-between m-2">
        <input type="text" placeholder="Tìm kiếm"/>
        <button className="btn btn-success" onClick={()=>openModalAdd()}>Add Item</button>
      </div>
      <div>
        <DataTable data={data} selectState={selectState}/>
        <PopUp modalEdit={modalEdit} stateSelection={stateSelection} handleChange={handleChange} setmodalEdit={setmodalEdit} editItem={editItem}/>
        <PopUp modalAdd={modalAdd} data={data} stateSelection={stateSelection} handleChange={handleChange} setmodalConfirmAdd={setmodalConfirmAdd} setmodalAdd={setmodalAdd}/>
        <ConfirmAdd modalConfirmAdd={modalConfirmAdd} addItem={addItem} cancelModal={cancelModal}/>
        <Delete modalDelete={modalDelete} stateSelection={stateSelection} deleteItem={deleteItem} setmodalDelete={setmodalDelete}/>
      </div>
    </div>
  );
}

export default App;
