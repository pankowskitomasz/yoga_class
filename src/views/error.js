import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class Error extends Component{
    render(){
        return(        
            <Container fluid className="error-s1 d-flex align-items-center p-header">
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={10} sm={6} className="mx-auto">
                        <h2 className="text-dark font-weight-bold">
                            Page not found!
                        </h2>
                        <Link to={this.props.backLink.href} className="btn btn-outline-dark d-inline rounded-pill mt-3">
                            {this.props.backLink.name}
                        </Link>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Error;