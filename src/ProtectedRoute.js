import { Link,Switch, Route } from "react-router-dom";
import Login from './Login'
function ProtectedRoute(props){
      debugger
      console.log("inside ProtectedRoute.js")
if(sessionStorage.getItem("isLoggedIn") != null &&
sessionStorage.getItem("isLoggedIn") == 'true')
 {   
  return (<Route path={props.path} exact
        component={props.component}/>);
  }
  else
    {
    return <Login setUsername={props.setUsername}  ></Login>
    }
    }
export default ProtectedRoute;