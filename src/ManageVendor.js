import React, { useState,useEffect } from "react";
import InsertRows from './InsertRows'
import HomeCarosel from "./HomeCarosel";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

function ManageVendor()  {
    var [emp,setEmp]=useState({ ENo: 0, EName: "", EAddress: "" })
    var [emps,setEmps]=useState([])

    var [search,setSearch]=useState("")

    useEffect(()=>{select()},[])
        

    var select = () => {
        debugger
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                setEmps(data)
            }      };
        xhr.open("GET", "http://127.0.0.1:4000/emps")
        xhr.send()
        debugger
    }

  var  onTextChange = (args) => {
        var copyEmp = { ...emp }
        copyEmp[args.target.name] = args.target.value
        setEmp(  copyEmp )
    }

   var Delete = (ENo) => {
        debugger;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                if (data.affectedRows != undefined && data.affectedRows > 0)
                    select();
            }

        }
        xhr.open("DELETE", "http://127.0.0.1:4000/emps/" + ENo)
        xhr.send()


        debugger
    }

  var  edit = (ENo) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                data.map((emp1) => {
                    if (emp1.ENo == ENo) {
                        setEmp(emp1)
                    }
                })
            }
        };
        xhr.open("GET", "http://127.0.0.1:4000/emps")
        xhr.send()
        debugger
    }

   var update = () => {
        var data5 = null;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                if (data.affectedRows != undefined && data.affectedRows > 0) {
                    select();
                    setEmp( { ENo: 0, EName: "", EAddress: "" } );
                }
                else {
                    alert('insert unsucessfull !!!!!')
                }
            }
        };
        xhr.open("PUT", "http://127.0.0.1:4000/emps/" + emp.ENo)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(emp))
    }

   var addRecord = () => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                if (data.affectedRows != undefined && data.affectedRows > 0) {
                    select();
                    setEmp( { ENo: 0, EName: "", EAddress: "" } );
                }
                else {
                    alert('insert unsucessfull !!!!!')
                }
            }
        }
        xhr.open("POST", "http://127.0.0.1:4000/emps")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(emp))
    }
  

        
        return (<>
            <h4>Manage vendor</h4>
            <table class="table table-bordered table-hover">
            
        <tbody>
            <tr><th> Sr no. </th>
                <th>Name</th>                
                <th>Id</th>
                <th>Mobile</th>
                <th>Address</th>                
                <th>Menu Supported</th>
                <th>Action</th>
                </tr>
            <tr>
            <td>1</td>
                <td>Ram</td>                
                <td>1</td>
                <td>98989878</td>
                <td>hinjewadi phase 1</td>                
                <td>Full-veg</td>
                <td><button>Remove</button></td>
            </tr>
            <tr>
            <td>2</td>
                <td>Shyam</td>                
                <td>2</td>
                <td>54658765</td>
                <td>hinjewadi phase 3</td>                
                <td>Mini-veg</td>
                <td><button>Remove</button></td>
                </tr>
            <tr>
                <td></td>
            </tr>
        </tbody>
     </table>    
     <a  type="button" className="btn btn-info">Add a new vendor</a>  
            </>  
            );}

export default ManageVendor;


