import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { TbWaveSine } from "react-icons/tb";

import Navbar from "react-bootstrap/Navbar";

function NavbarComponent({ setQuery, query, selectSpot }) {
  return (
    <Navbar expand="md" id="navbar">
      <Container fluid>
        <Navbar.Brand
          onClick={() => {
            selectSpot(null);
            setQuery("");
          }}
          id="brand"
        >
          <TbWaveSine /> WaveCheck SRDN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Col xs={12} className="d-flex justify-content-end">
            <input
              id="searchBar"
              type="text"
              className=" border-0 py-2 w-50"
              placeholder="search spot..."
              aria-label="Search query"
              aria-describedby="basic-addon2"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                selectSpot(null);
              }}
            />
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
