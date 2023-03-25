import { useState } from "react";
import { Toast, Button, Row, Col } from "react-bootstrap";

function InfoToast() {
  const [show, setShow] = useState(true);
  return (
    <Row className="infoMessage">
      <Col>
        <Button onClick={() => setShow(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512" fill="BLACK"><path d="M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.3 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.7-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.7 74.98-181.02C121.3 28.66 185.31 0 256 0zm-10.2 191.88c-7.07-.05-13.11-2.53-18.2-7.56-5.07-5.01-7.56-11.11-7.56-18.25 0-7.01 2.49-13.06 7.56-18.08 5.09-5.02 11.13-7.55 18.2-7.55 6.95 0 13 2.53 18.08 7.55 5.14 5.02 7.67 11.07 7.67 18.08 0 4.72-1.2 9.07-3.56 12.94-2.36 3.93-5.45 7.07-9.31 9.37-3.87 2.3-8.17 3.45-12.88 3.5zm27.94 150.37h29.15v29.32H209.1v-29.32h28.76v-92.34H209.1v-29.32h64.64v121.66z"/></svg>
          &nbsp; Info
        </Button>
        <Toast bg="primary" onClose={() => setShow(false)} show={show} autohide delay={5000} className="position-absolute">
          <Toast.Header>
            <strong className="me-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512" fill="blue"><path d="M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.3 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.7-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.7 74.98-181.02C121.3 28.66 185.31 0 256 0zm-10.2 191.88c-7.07-.05-13.11-2.53-18.2-7.56-5.07-5.01-7.56-11.11-7.56-18.25 0-7.01 2.49-13.06 7.56-18.08 5.09-5.02 11.13-7.55 18.2-7.55 6.95 0 13 2.53 18.08 7.55 5.14 5.02 7.67 11.07 7.67 18.08 0 4.72-1.2 9.07-3.56 12.94-2.36 3.93-5.45 7.07-9.31 9.37-3.87 2.3-8.17 3.45-12.88 3.5zm27.94 150.37h29.15v29.32H209.1v-29.32h28.76v-92.34H209.1v-29.32h64.64v121.66z"/></svg>
              &nbsp;Info
            </strong>
          </Toast.Header>
          <Toast.Body className="text-start">
            <h6>I have completed the Fustack Web Development course at DCI, and I am currently actively seeking job or internship opportunities.</h6>
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  )
}

export default InfoToast
