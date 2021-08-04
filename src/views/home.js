import React,{Component} from "react";
import HomeData from "../components/home-data";

class Home extends Component{
    render(){
        return(          
            <main className="minh-100vh">     
                <HomeData backLink={this.props.backLink}/>
            </main>
        );
    }
}

export default Home;