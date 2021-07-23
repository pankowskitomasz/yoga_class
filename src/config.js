import {Redirect} from "react-router-dom";
import Comingsoon from "./views/comingsoon";
import Error from "./views/error";
import PrivacyPolicy from "./views/privacy";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};

export {
    appCfg,
}