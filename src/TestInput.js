import React, { Component } from "react";

// class TestInput extends Component{
//     state={Name:"abcd"}
// onTextChange=(args)=>
// {
//     var copy=this.state.Name;
//     copy=args.target.value;

// this.setState({Name:copy})
// }
// doChange=()=>{
//     this.setState({Name:"satyam"})
// }
//     render (){
//         return <>
//         <input type="text" onChange={this.onTextChange} value={this.state.Name}></input>
//         <button onClick={this.doChange}>click here</button>
//         <div>{this.state.Name}</div>
//         </>
//     }
// }


class TestInput extends Component{
    state={emp:{no:0,name:"",address:""}}

    onTextChange=(args)=>{
        var copyEmp={...this.state.emp}
        copyEmp[args.target.name]=args.target.value
        this.setState({emp:copyEmp})
    }

    render()
    {
        return <>
       no. <input type="number" name="no" value={this.state.emp.no}
        onChange={this.onTextChange}></input>
        name. <input type="text" name="name" value={this.state.emp.name}
        onChange={this.onTextChange}></input>
        address. <input type="text" name="address" value={this.state.emp.address}
        onChange={this.onTextChange}></input>
        <div>
        {this.state.emp.no}{this.state.emp.name}
        {this.state.emp.address}</div>
        </>
    }
}



export default TestInput;