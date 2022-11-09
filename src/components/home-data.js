import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class HomeData extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill border-green-gray text-green-gray">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"contact-data align-items-center p-0 d-flex minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={10} lg={6} className="mx-auto text-dark p-0 order-2 order-md-1">
                        <img alt="about"
                            className="img-fluid"
                            src="img/contact/contact-data.png"/>
                    </Col>
                    <Col xs={10} lg={6} className="mx-auto text-dark p-0 d-flex order-1 order-md-2 align-items-center">
                        <div className="p-5 contact-bg">
                            <h1 className="display-5 font-logo text-caption fw-bold">
                                Yoga Class
                            </h1>
                            <p className="initialism text-muted">
                                We offer wide range of classes suited for needs of 
                                most people. Our trainers are always ready to help you. 
                                Dont wait, contact us now!
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeData;