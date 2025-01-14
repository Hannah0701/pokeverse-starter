import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import pokeBall from "../public/poke_ball.svg";

function Header() {
 return (
    <Navbar className='bg-body-tertiary justify-content-between'>
        <Container>
            <Navbar.Brand href="#home">
            <img
                alt='Poké Ball'
                src={pokeBall}
                width='30'
                height='30'
                className='d-inline-block align-top'
            />{' '} Pokéverse
            </Navbar.Brand>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
    </Navbar>
  );
}

export default Header;