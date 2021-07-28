import React, { Component } from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Form from "../../node_modules/react-bootstrap/Form";
import update from "react-addons-update";
import {APP_LINKS} from "../config";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            formData: {
                emailAddress: "",
                firstName: "",
                lastName: "",
                messageText: "",
                phoneNumber: ""
            }
        };
    }
    updateFormData(ev) {
        var updateData;
        if (ev.target.name === "firstName") {
            updateData = update(this.state.formData, {
                firstName: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "lastName") {
            updateData = update(this.state.formData, {
                lastName: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "emailAddress") {
            updateData = update(this.state.formData, {
                emailAddress: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "phoneNumber") {
            updateData = update(this.state.formData, {
                phoneNumber: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "messageText") {
            updateData = update(this.state.formData, {
                messageText: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
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
        if(this.state.formData.firstName.length!==0
        && this.state.formData.lastName.length!==0
        && this.state.formData.emailAddress.length!==0
        && this.state.formData.phoneNumber.length!==0
        && this.state.formData.messageText.length!==0){
            let formData = new FormData();
            formData.append("fname",this.state.formData.firstName);
            formData.append("flast",this.state.formData.lastName);
            formData.append("fmail",this.state.formData.emailAddress);
            formData.append("fphone",this.state.formData.phoneNumber);
            formData.append("fmsg",this.state.formData.messageText);
            let msgcnt = this.getCookie("msgcount");
            msgcnt = (msgcnt==="")?0:msgcnt;
            formData.append("msgcount",msgcnt);
            fetch(APP_LINKS.messages,{
                method:"POST",
                body:formData
            })
            .then((response)=>response.json())
            .then((data)=>{
                if(data["msgcount"]!==undefined
                && !isNaN(data["msgcount"])){                    
                    this.setCookie("msgcount",data.msgcount,2);
                    this.props.backNav("confirm");
                }
            })
            .catch((error)=>{
                this.props.backNav("error");
            });  
            this.clearForm();
        }
    }

    clearForm(){
        let clearData = update(this.state.formData,{
            emailAddress: {$set: ""},
            firstName: {$set:""},
            lastName: {$set:""},
            messageText: {$set:""},
            phoneNumber: {$set:""}
        });
        this.setState({ formData: clearData });        
    }

    render() {
        return (
            <Container fluid className={"contact-form align-items-center p-0 py-5  d-flex minh-50vh " + this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={10} md={6} lg={5} className="mx-auto p-0 d-flex align-items-center">
                        <Form className="text-start w-100 border border-caption p-4 rounded shadow text-caption opacity-8"
                            autoComplete="off"
                            method="POST">
                            <div className="border-bottom border-caption mb-4">
                                <p className="font-weight-bold mb-1 text-caption fw-bold">
                                    Contact online
                                </p>
                            </div>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter first name"
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="50"
                                    name="firstName"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.firstName}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formLastName" className="mt-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter last name"
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="50"
                                    name="lastName"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.lastName}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mt-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter email"
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="50"
                                    name="emailAddress"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.emailAddress}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formPhone" className="mt-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel"
                                    placeholder="Enter phone"
                                    className="rounded-pill border-caption text-secondary"
                                    maxLength="15"
                                    name="phoneNumber"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.phoneNumber}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formMessage" className="mt-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea"
                                    rows={4}
                                    className="border-caption text-secondary"
                                    maxLength="250"
                                    name="messageText"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.messageText}
                                    required/>
                            </Form.Group>
                            <div className="w-100 text-end mt-3">
                                <Button variant="outline-secondary"
                                    type="reset"
                                    onClick={this.clearForm.bind(this)}
                                    className="mx-1 rounded-pill">
                                    Clear
                                </Button>
                                <Button
                                    variant="outline-secondary"
                                    className="mx-1 rounded-pill"
                                    onClick={this.sendForm.bind(this)}>
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactForm;