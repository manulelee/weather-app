import { useQuery } from "@tanstack/react-query";
import { Card, Col, Row } from "react-bootstrap";
import { getSpotWeather } from "../utils/http";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { ClipLoader } from "react-spinners";

const SpotPreview = ({ province, locality, name, latitude, longitude, mapLink, selectSpot }) => {
  const { isError, isLoading, data, error } = useQuery({
    queryKey: [`${latitude} - ${longitude}`],
    queryFn: ({ signal }) =>
      getSpotWeather({
        signal,
        latitude,
        longitude,
      }),
    refetchOnWindowFocus: false,
    refetchInterval: 36000000,
    retry: false,
  });

  return (
    <Card
      className="bg-body-tertiary shadow my-2"
      onClick={() => selectSpot({ province, locality, name, latitude, longitude, mapLink })}
    >
      <Card.Body>
        <Card.Title className="fw-bold fs-4">{name.toUpperCase()}</Card.Title>
        {isError && (
          <div className="text-center my-24 mx-auto">
            <p> {error.info.status_message || "Error: could not fetch data"}</p>
            <p>Status: {error.code || "unknown"}</p>
          </div>
        )}

        {isLoading && (
          <div className=" text-center my-24 mx-auto">
            <ClipLoader color="green" />
          </div>
        )}
        {data && (
          <Row className="my-1">
            {data.current.swell_wave_height <= 0.1 && <h5 className="fw-bold text-danger fs-4">FLAT</h5>}
            {data.current.swell_wave_height > 0.1 && data.current.swell_wave_height <= 0.3 && (
              <h5 className="fw-bold text-danger fs-4">VERY POOR</h5>
            )}
            {data.current.swell_wave_height > 0.3 && data.current.swell_wave_height <= 0.6 && (
              <h5 className="fw-bold text-warning fs-4">POOR</h5>
            )}
            {data.current.swell_wave_height > 0.6 && data.current.swell_wave_height <= 0.8 && (
              <h5 className="fw-bold text-warning fs-4">POOR TO FAIR</h5>
            )}
            {data.current.swell_wave_height > 0.8 && data.current.swell_wave_height <= 1.0 && (
              <h5 className="fw-bold text-success fs-4">FAIR</h5>
            )}
            {data.current.swell_wave_height > 1.0 && data.current.swell_wave_height <= 1.3 && (
              <h5 className="fw-bold text-success fs-4">FAIR TO GOOD</h5>
            )}
            {data.current.swell_wave_height > 1.3 && data.current.swell_wave_height <= 1.6 && (
              <h5 className="fw-bold text-success fs-4">GOOD</h5>
            )}
            {data.current.swell_wave_height > 1.6 && <h5 className="fw-bold text-success fs-4">VERY GOOD</h5>}

            <div className=" ps-4  px-1">
              <p className="fw-bold my-0 fs-smaller">
                <IoTimeOutline className="me-1" />
                {data.current.time.split("T")[1]}
              </p>
              <Row className="my-0">
                <Col xs={12}>
                  <p className="fs-smaller my-0">
                    Swell height: {data.current.swell_wave_height} {data.current_units.swell_wave_height}
                  </p>
                  <p className="fs-smaller my-0">
                    Swell period: {data.current.swell_wave_period} {data.current_units.swell_wave_period}
                  </p>

                  <p className="fs-smaller my-0">
                    Swell direction:{" "}
                    <FaLongArrowAltUp style={{ transform: `rotate(${data.current.swell_wave_direction}deg)` }} />
                  </p>
                </Col>
              </Row>
              <Row className="mt-2"></Row>
            </div>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default SpotPreview;
