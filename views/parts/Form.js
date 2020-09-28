import React from 'react'
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';
class Forms extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Label for="first_name" sm={2}></Label>
                    <Col sm={10}>
                        <Input
                            name="first_name"
                            type="text"
                          
                            value={this.props.first_name}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="last_name" sm={2}></Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="last_name"
                           
                            value={this.props.last_name}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}></Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={this.props.email}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="user_name" sm={2}></Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="user_name"
                            placeholder="user_name"
                            value={this.props.user_names}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>  
        )
        
    }
}

export default Forms