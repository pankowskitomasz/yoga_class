import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class AboutShort extends Component{
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
            <Container fluid className={"align-items-center p-0 d-flex minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 pt-lg-0">
                    <Col xs={12} lg={6} className="mx-auto text-dark p-0 d-flex align-items-center minh-50vh">
                        <div className="p-5 contact-bg">
                            <h1 className="display-5 font-logo text-caption fw-bold">
                                Why yoga?
                            </h1>
                            <p className="initialism text-muted">
                                Yoga improves strength, balance and flexibility. Slow movements 
                                and deep breathing increase blood flow and warm up muscles, while 
                                holding a pose can build strength. Try it: Tree Pose. Balance on 
                                one foot, while holding the other foot to your calf or above the 
                                knee (but never on the knee) at a right angle.
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="mx-auto text-dark d-flex p-0 align-items-end text-end minh-50vh">
                        <img alt="about" className="img-fluid ms-auto" src="img/about/about-short.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutShort;