import { Container, Form, Col, Row, Button } from "react-bootstrap"
import { useForm, ValidationError } from '@formspree/react';

function ContactMe({mode}) {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);
  if (state.succeeded) {
      return (
        <Container className="d-flex mt-5 justify-content-center">
          <h1>Thanks for your message!</h1>
        </Container>
      );
  }
  return (
    <Container className="contactme  mt-xs-2 mt-sm-3 mt-lg-4 mt-xl-5 mt-xxl-5 ml-1 mr-1 mb-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3 mt-3 justify-content-center" controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10} md={6}>
            <Form.Control type="text" placeholder="Please enter your name" name="name"/>
          </Col>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10} md={6}>
            <Form.Control type="email" placeholder="Please enter your email" name="email"/>
          </Col>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formHorizontalMessage">
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10} md={6}>
            <Form.Control as="textarea" rows={5} placeholder="Please enter your message" name="message"/>
          </Col>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" disabled={state.submitting}>Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default ContactMe
