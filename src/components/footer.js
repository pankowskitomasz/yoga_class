import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return(      
            <footer>
                <Container fluid className="d-flex align-items-center p-3 fixed-bottom z-index-0">
                    <Row className="mx-auto text-center d-flex w-100">
                        <Col xs={10} className="mx-auto">
                            <small className="my-0 text-dark text-shadow">
                                Copyright &copy; 2021 Tomasz Pankowski. All rights reserved. 
                                <Link to={this.props.privacyLink.href} className="text-dark text-decoration-none">
                                    {this.props.privacyLink.name}
                                </Link>
                            </small>
                        </Col>
                    </Row>
                </Container> 
            </footer> 
        );
    }
}

export default Footer;