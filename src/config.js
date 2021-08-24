import {Redirect} from "react-router-dom";
import About from "./views/about";
import Classes from "./views/classes";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Home from "./views/home";
import Login from "./views/login";
import PrivacyPolicy from "./views/privacy";
import Register from "./views/register";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home backLink={{name:"Join now!",path:"/register"}}/>}, 
        {navItem:true, exact:true, path:"/about",name:"About",view:<About/>}, 
        {navItem:true, exact:true, path:"/classes",name:"Classes",view:<Classes/>}, 
        {navItem:true, exact:true, path:"/contact",name:"Contact us",view:<Contact/>}, 
        {navItem:true, exact:true, path:"/login",name:<span className="fa fa-user-circle-o"></span>,view:<Login backLink={{name:" Register now!",href:"/register"}}/>}, 
        {navItem:false, exact:true, path:"/register",name:"Register",view:<Register backLink={{name:" Login now!",href:"/login"}}/>}, 
        {navItem:false, exact:true, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};

const APP_LINKS = {
    messages: "message.php",
    register: "register.php",
    users: "user.php"
};

export {
    appCfg,
    APP_LINKS
}