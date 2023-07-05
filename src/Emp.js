import { Component } from "react";



class Emp extends Component
{
    state={Ename:"satyam"} ;
    doSome=()=> {
        // this.state.Ename="shivam"
        this.setState({Ename:"shivam"});
    }
    render(){
        return (<>
        {/* <h1 >hello</h1> */}
        
        <h3>{this.state.Ename}</h3>
        
        <button onClick={this.doSome} class="btn btn-primary">change</button>
        
        </>);
    }


}

// export default (<Emp></Emp>)
export default Emp;