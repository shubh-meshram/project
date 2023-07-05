import { Component } from "react"

class Emp1 extends Component {

    constructor (){
        super();
        console.log("constructor called...")
    }
     
    state={Ename:"hello",i:0}
    doSomething=()=>{
        console.log("onclick code called...")
        this.setState({Ename:"satyam"})
    }

    componentDidMount(){
        console.log("comp. did mount method called...")

    }
    componentDidUpdate(){
        console.log("comp. did update method called...")

    }
    shouldComponentUpdate(){
        this.state.i++;
        console.log(" should comp. update method called...")
        
        if(this.state.i<5)
        return false
        return true
    }

    render(){
        console.log("render called...")
        return (<>
        <h1>{this.state.Ename}</h1>        
        <button type="button" onClick={this.doSomething} >button</button>        
        </>);
    }
}

export default Emp1;