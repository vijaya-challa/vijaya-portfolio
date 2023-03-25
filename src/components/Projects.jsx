import { Container, Card, CardGroup } from 'react-bootstrap'

function Projects({mode}) {
  return (
    <Container className="projects container text-center justify-content-center mt-xs-2 mt-sm-3 mt-lg-4 mt-xl-5 mt-xxl-5 ml-1 mr-1">
      <CardGroup className="column-gap-3 p-3">
          <Card bg={mode} text={mode ==='light' ? 'dark' : 'white'} className="card">
            <Card.Body>
              <Card.Title>E-Commerce Backend</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Individual project at DCI</Card.Subtitle>
              <Card.Text>
                An e-commerce Node.js, Express, and MongoDB backend app.
                Used mongoose ODM for database CRUD operations and JWT for authorization.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/vijaya-challa/E-commerceApp">GitHub Link</Card.Link>
            </Card.Footer>
          </Card>
          <Card bg={mode} text={mode ==='light' ? 'dark' : 'white'} className="card">
            <Card.Body>
              <Card.Title>Resume Builder</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Group project at DCI</Card.Subtitle>
              <Card.Text>
                A resume builder app using Node.js and React. Worked in a team of four.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/vijaya-challa/react-group-project">GitHub Link</Card.Link>
            </Card.Footer>
          </Card>
          <Card bg={mode} text={mode ==='light' ? 'dark' : 'white'} className="card">
            <Card.Body>
              <Card.Title>Movie Search App</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">From video tutorial</Card.Subtitle>
              <Card.Text>
                A movie search app using Node.js and React.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/vijaya-challa/MovieSearch">GitHub Link</Card.Link>
            </Card.Footer>
          </Card>
          <Card bg={mode} text={mode ==='light' ? 'dark' : 'white'} className="card">
            <Card.Body>
              <Card.Title>Analog Clock</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">From video tutorial</Card.Subtitle>
              <Card.Text>
                A simple HTML, CSS and JavaScript analog clock.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/vijaya-challa/wds-analog-clock">GitHub Link</Card.Link>
            </Card.Footer>
          </Card>
      </CardGroup>
    </Container>
  );
}

export default Projects
