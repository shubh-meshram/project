import { useState } from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
function Login(props) {
    var [credentials, setCredentials] = useState({ username: "", password: "" })
    var [message, setMessage] = useState("")
    const history = useHistory(); 

    var signIn = () => {
        debugger
        console.log("inside login.js signin fnctn")
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data1 = JSON.parse(xhr.responseText)
                if (data1.isValid == true) {
                    sessionStorage.setItem("username", credentials.username )
                    sessionStorage.setItem("isLoggedIn", true )
                    props.setUsername(credentials.username)
                    debugger
                    console.log("inside login.js signin fnctn(onsucess before nav)")
                    history.push("/");
                    console.log("inside login.js signin fnctn(onsucess after nav)")
                    debugger
                } 
                else {
                    setMessage("invalid credentials")
                    setCredentials({username:"",password:""})
                    console.log("inside login.js signin fnctn(not-success)")

                    debugger
                }
            }
        }
        xhr.open("POST","http://127.0.0.1:4000/login")
        var credentisalsInString=JSON.stringify(credentials)
        var encodedCredentials=window.btoa(credentisalsInString)
        var jasonFormat={"validation":encodedCredentials}
        xhr.setRequestHeader("Content-Type","application/json")
        xhr.send(JSON.stringify(jasonFormat))
    }
    var onTextchange = (args) => {
        var copyCredentials = { ...credentials }
        copyCredentials[args.target.name] = args.target.value;
        setCredentials(copyCredentials);
    }

    return <>  <br></br><br></br>
        <h1>Login page</h1>
        <hr></hr>
        <table>
        <tbody>
            <tr>
                <td><input placeholder="USERNAME..." value={credentials.username} onChange={onTextchange} type="text" name="username"></input></td>
            </tr>
            <tr>
                <td><input placeholder="PASSWORD..." type="text" value={credentials.password} onChange={onTextchange} name="password"></input></td>
            </tr>
            <tr>
                <td><input type="button" className="btn btn-primary" value="Sign In" onClick={signIn} ></input></td>
            </tr>
            <tr><td>{message}</td></tr>
            </tbody>
        </table>
        <hr></hr>
        <br></br>
        <br></br></>;

}

export default Login;