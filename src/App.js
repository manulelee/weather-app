import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import SpotPreview from "./components/SpotPreview";
import SPOTS from "./utils/spots";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SpotForecast from "./components/SpotForecast";
import { useState } from "react";
import FooterComponent from "./components/FooterComponent";

const queryClient = new QueryClient();
function App() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      <Container fluid className="px-0" id="appContainer">
        <NavbarComponent setQuery={setSearchQuery} query={searchQuery} selectSpot={setSelectedSpot} />
        <Row className="w-100 ps-3 py-5">
          {selectedSpot === null ? (
            searchQuery.length > 0 ? (
              SPOTS.filter(
                (spot) =>
                  spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  spot.locality.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  spot.province.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((filteredSpot) => (
                <Col xs={12} md={6} lg={4} xl={3} key={filteredSpot.id}>
                  <SpotPreview {...filteredSpot} selectSpot={setSelectedSpot} />
                </Col>
              ))
            ) : (
              <p className="text-center fw-bold fs-4">Favourites spots:</p>
            )
          ) : (
            <SpotForecast {...selectedSpot} />
          )}
        </Row>
        <FooterComponent />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
