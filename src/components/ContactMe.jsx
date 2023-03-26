import { Container, Form, Col, Row, Button } from "react-bootstrap"

function ContactMe({mode}) {
  return (
    <Container className="contactme  mt-xs-2 mt-sm-3 mt-lg-4 mt-xl-5 mt-xxl-5 ml-1 mr-1 mb-5">
      <Form>
        <Form.Group as={Row} className="mb-3 mt-3 justify-content-center" controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10} md={6}>
            <Form.Control type="text" placeholder="Please enter your name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10} md={6}>
            <Form.Control type="email" placeholder="Please enter your email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formHorizontalMessage">
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10} md={6}>
            <Form.Control as="textarea" rows={5} placeholder="Please enter your message" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default ContactMe
