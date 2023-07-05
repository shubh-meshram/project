


function InsertRows(props){

    return  <tr >
                                
        <td>{props.emp3.ENo}</td>
        <td>{props.emp3.EName}</td>
        <td>{props.emp3.EAddress}</td>
        <td><button className="btn btn-danger" onClick={() => {
           props.Delete(props.emp3.ENo)}}>delete</button></td>
        <td><button className="btn btn-info" onClick={() => {
           props.edit(props.emp3.ENo)
        }}>EDIT</button></td>
    </tr>   
    
}

export default InsertRows;