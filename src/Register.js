import { useState } from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
function Register(props) {
    var [details, setdetails] = useState({ name:"",mobile:"",email:"",role:"", password: "" })
    var [message, setMessage] = useState("");
    const history = useHistory(); 

    
    const options = ['CUSTOMER','VENDOR'];
    const onOptionChangeHandler = (args) => {
        setdetails({role:args.target.value});
        console.log("User Selected Value - ", args.target.value);
    }

    // var signup = () => {
    //     debugger
    //     console.log("inside reister.js register fnctn")
    //     var xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState == 4 && xhr.status == 200) {
    //             var data1 = JSON.parse(xhr.responseText)
    //             if (data1.isValid == true) {
    //                 sessionStorage.setItem("username", credentials.username )
    //                 sessionStorage.setItem("isLoggedIn", true )
    //                 props.setUsername(credentials.username)
    //                 debugger
    //                 console.log("inside login.js signin fnctn(onsucess before nav)")
    //                 history.push("/");
    //                 console.log("inside login.js signin fnctn(onsucess after nav)")
    //                 debugger
    //             } 
    //             else {
    //                 setMessage("invalid credentials")
    //                 setCredentials({username:"",password:""})
    //                 console.log("inside login.js signin fnctn(not-success)")

    //                 debugger
    //             }
    //         }
    //     }
    //     xhr.open("POST","http://127.0.0.1:4000/login")
    //     var credentisalsInString=JSON.stringify(credentials)
    //     var encodedCredentials=window.btoa(credentisalsInString)
    //     var jasonFormat={"validation":encodedCredentials}
    //     xhr.setRequestHeader("Content-Type","application/json")
    //     xhr.send(JSON.stringify(jasonFormat))
    // }

    var onTextchange = (args) => {
        var copyCredentials = { ...details }
        copyCredentials[args.target.name] = args.target.value;
        setdetails(copyCredentials);
    }

    return <>  <br></br><br></br>
        <h1>Sign up page</h1>
        <hr></hr>
        <table>
        <tbody>
            <tr>
                <td>NAME</td>
                <td><input placeholder="Name" value={details.name} onChange={onTextchange} type="text" name="name"></input></td>
            </tr>
            <tr>
            <td>MOBILE</td>
                <td><input placeholder="mobile..." type="text" value={details.mobile} onChange={onTextchange} name="mobile"></input></td>
            </tr>
            <tr>
            <td>EMAIL</td>
                <td><input placeholder="email..." type="text" value={details.email} onChange={onTextchange} name="email"></input></td>
            </tr>
            <tr>
            <td>ROLE</td>
            <td><select onChange={onOptionChangeHandler}>
 
                <option>PLEASE CHOOSE ROLE</option>
                {options.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}
                </select></td>
            </tr>
            <tr>
            <td>PASSWORD</td>
                <td><input placeholder="PASSWORD..." type="password" value={details.password} onChange={onTextchange} name="password"></input></td>
            </tr>
            <tr>
            <td>YOUR PASSWORD</td>
                <td><input placeholder="PASSWORD..." type="text" value={details.password} onChange={onTextchange} name="password"></input></td>
            </tr>
            <tr>
                
                <td><input type="button" className="btn btn-primary" value="Sign Up" 
                // onClick={signup}
                ></input></td>
            </tr>
            <tr><td>{message}</td></tr>
            </tbody>
        </table>
        <hr></hr>
        <br></br>
        <br></br></>;

}

export default Register;