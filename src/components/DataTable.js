import React from 'react'

const DataTable = props => {
    return (
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
                {props.data.map(element=>(
                    <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.quantity}</td>
                    <td>{element.sellerName}</td>
                    <td><button className="btn btn-primary" onClick={()=>props.selectState(element, 'Edit')}>Edit</button> {"   "} 
                    <button className="btn btn-danger" onClick={()=>props.selectState(element, 'Delete')}>Delete</button></td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
