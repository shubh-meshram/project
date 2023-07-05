import React, { useState,useEffect } from "react";
import HomeCarosel from "./HomeCarosel";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

function OrderNow()  {
    var [emp,setEmp]=useState({ ENo: 0, EName: "", EAddress: "" })
    var [emps,setEmps]=useState([])
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
            <div className="container table-responsive" >
               <div>
                <h4>MENU</h4>
               </div>
                
                <table className="table table-bordered table-hover table table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Meal type</th>
                            <th>Meal menu</th>
                            <th>Meal time</th>                            
                            <th>Meal price(Rs.)</th>
                            <th>Add to Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Full (Veg.)</td>
                            <td>(1 vegetarian gravy,1 dal,3 chapati,1 rice mini-bowl,1 salad/soup )</td>
                            <td>lunch</td>
                            <td>120</td>
                            <td><button>Add</button></td>              
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Mini (Veg.)</td>
                            <td>(1 vegetarian gravy,1 dal,3 chapati,1 salad/soup )</td>
                            <td>lunch</td>
                            <td>100</td>
                            <td><button>Add</button></td>              
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Full (Non-Veg.)</td>
                            <td>(1 gravy chicken ,1 dal,3 chapati,1 rice mini-bowl,1 salad/soup )</td>
                            <td>dinner</td>
                            <td>180</td>
                            <td><button>Add</button></td>              
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Mini (Non-Veg.)</td>
                            <td>(1 gravy chicken,1 dal,3 chapati,1 salad/soup )</td>
                            <td>dinner</td>
                            <td>160</td>
                            <td><button>Add</button></td>              
                        </tr>
                    </tbody>
                </table>
                
                <br></br><br></br><hr></hr><br></br>
                <div><h4>Order Summary</h4></div><br></br>

                <table className="table table-bordered table-hover table table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Order Item</th>
                            <th>Qty</th>
                            <th>Rate(Rs.)</th>                            
                            <th>Total(Rs.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Full (Veg.)</td>
                            <td><button> - </button>1 <button> + </button></td>
                            <td>120</td>
                            <td>120</td>        
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Mini (Veg.)</td>
                            <td><button> - </button>2 <button> + </button></td>
                            <td>100</td>
                            <td>200</td>           
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><h4>Grand Total</h4></td>
                            <td>320</td>             
                        </tr>
                        
                    </tbody>
                </table>
                <button onClick ><h6>Pay Now</h6></button>


                </div>       
            </>  
            );}

export default OrderNow;


