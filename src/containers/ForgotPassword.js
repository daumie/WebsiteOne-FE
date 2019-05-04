import React from 'react';
import { Container, Button, Form, Header, Grid } from 'semantic-ui-react'

export default class ForgotPassword extends React.Component {
    state = {
        email: ''
    }

    handleChange = (e) => {
        this.setState({email: e.target.value})
    }

    handleSubmit = (e) => {
        console.log('Submitted: ' + this.state.email)
        // POST         /users/password
        e.preventDefault()
    }

    render() {
        return (
            <Container className="forgot-password">
                <Header as='h1' textAlign='center'>
                    Forgot your password?
                </Header>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column mobile={12} computer={8}>
                            <Form className="forgot-password__form" onSubmit={this.handleSubmit}>
                                <Form.Input
                                    name="email"
                                    placeholder="Enter email"
                                    type="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                                <Button fluid={true} secondary={true}>Send me reset password instructions</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}