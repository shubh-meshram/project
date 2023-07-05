import React, { useState,useEffect } from "react";
import InsertRows from './InsertRows'
import HomeCarosel from "./HomeCarosel";
import ManageVendor from "./ManageVendor";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

function DashboardAdmin()  {
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
            <h4>welcome to admin page</h4>
            <table class="table table-bordered table-hover">
                
                <tbody>
                    <tr>
                        <td>
                       
                       <button type="button" class="btn btn-info">Edit profile</button>
                       
                        </td>
                    </tr>
                    <tr>
                        <td>
                       
                       <a class="btn btn-info" href="/managevendor" >Manage Vendors</a>
                       
                        </td>
                    </tr>
                    <tr>
                        <td>
                       
                       <button type="button" class="btn btn-info">Orders log</button>
                       
                        </td>
                    </tr>
                    <tr>
                        <td>
                       
                       <button type="button" class="btn btn-info">Payments section</button>
                       
                        </td>
                    </tr>
                    <tr>
                        <td>
                       
                       <button type="button" class="btn btn-info">Set Menus</button>
                       
                        </td>
                    </tr>

                </tbody>
            </table>
               
          
    
            </>  
            );}

export default DashboardAdmin;


