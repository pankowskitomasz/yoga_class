import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Form from "../../node_modules/react-bootstrap/Form";
import update from "react-addons-update";
import {Link} from "react-router-dom";
import {APP_LINKS} from "../config";

class RegisterForm extends Component{
    constructor() {
        super();
        this.state = {
            userData: {
                name: "",
                pass: ""
            }
        };
    }

    componentDidMount(){
        if(this.getCookie("tkid").length>0){
            let formData = new FormData();
            let utk = this.getCookie("tkid");
            formData.append("tkid",utk);
            fetch(APP_LINKS.users,{
                method:"POST",
                body:formData
            })
            .then((response)=>{
                if(response.status===200){
                    this.props.backNav("dashboard");
                }
                else if(response.status===401){
                    this.setCookie("tkid","",-1);
                }
            })
            .catch((error)=>{
                this.props.backNav("form");
            });  
            this.clearForm();
        }
    }

    updateUserData(ev) {

    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    setCookie(cname, cvalue, exh) {
        var d = new Date();
        d.setTime(d.getTime() + (exh*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    sendForm(){ 

    }

    clearForm(){

    }

    render(){
        return(        
            <Container fluid className={"register-form align-items-center p-0 py-5 d-flex minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-start w-100 pt-5">
                    <Col xs={10} md={6} lg={5} className="mx-auto p-0 d-flex align-items-center">
                        <Form className="text-start w-100 border border-caption p-4 rounded bg-light-gray shadow text-caption opacity-9 z-index-10"
                            autoComplete="off"
                            method="POST">
                            <div className="border-bottom border-caption mb-4">
                                <p className="font-weight-bold mb-1 fw-bold">
                                    Register user
                                </p>
                            </div>
                            <Form.Group controlId="formFirst">
                                <Form.Label>First Name</Form.Label>
                                 <Form.Control type="text" 
                                    placeholder="Enter first name" 
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="50"
                                    name="userName"
                                    onChange={this.updateUserData.bind(this)} 
                                    value={this.state.userData.name}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formLast" className="mt-3">
                                <Form.Label>Last Name</Form.Label>
                                 <Form.Control type="text" 
                                    placeholder="Enter last name" 
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="50"
                                    name="userName"
                                    onChange={this.updateUserData.bind(this)} 
                                    value={this.state.userData.name}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mt-3">
                                <Form.Label>Email</Form.Label>
                                 <Form.Control type="text" 
                                    placeholder="Enter email" 
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="50"
                                    name="userName"
                                    onChange={this.updateUserData.bind(this)} 
                                    value={this.state.userData.name}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formLogin" className="mt-3">
                                <Form.Label>Login</Form.Label>
                                 <Form.Control type="text" 
                                    placeholder="Enter login" 
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="50"
                                    name="userName"
                                    onChange={this.updateUserData.bind(this)} 
                                    value={this.state.userData.name}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formPassword" className="mt-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" 
                                    placeholder="Enter password" 
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="40"
                                    name="userPass"
                                    onChange={this.updateUserData.bind(this)} 
                                    value={this.state.userData.pass}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formPasswordRepeat" className="mt-3">
                                <Form.Label>Password (repeat)</Form.Label>
                                <Form.Control type="password" 
                                    placeholder="Repeat password" 
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="40"
                                    name="userPass"
                                    onChange={this.updateUserData.bind(this)} 
                                    value={this.state.userData.pass}
                                    required/>
                            </Form.Group>
                            <div className="w-100 text-start py-3">
                                <p className="text-caption fw-normal">
                                    Registered? 
                                    <Link to={this.props.backLink.href} className="text-caption fw-bold text-decoration-none">
                                         {this.props.backLink.name}
                                    </Link>
                                </p>
                            </div>
                            <div className="w-100 text-end py-1">
                                <Button 
                                    variant="outline-secondary" 
                                    type="reset" 
                                    className="mx-1 rounded-pill">
                                    Clear
                                </Button>
                                <Button variant="outline-secondary" 
                                    className="mx-1 rounded-pill"
                                    onClick={this.sendForm.bind(this)}>
                                    Register
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default RegisterForm;