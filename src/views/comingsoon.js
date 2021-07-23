import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class Comingsoon extends Component{
    render(){
        return(        
            <Container fluid className="comingsoon-s1 d-flex align-items-center p-header">
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={10} sm={8} md={6} lg={5} className="mx-auto text-white text-shadow">
                        <div className="card bg-dark text-white box-shadow p-3 opacity-8 border border-primary">
                            <h1 className="display-4 font-weight-bold font-logo">
                                Starting soon
                            </h1>
                            <p className="lead">
                                Hi, we are not ready yet, however we are starting soon<br/>  
                                Please visit us again in a while.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Comingsoon;