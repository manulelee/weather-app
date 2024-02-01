import { useQuery } from "@tanstack/react-query";
import { getSpotWeather } from "../utils/http";
import { Card, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { ClipLoader } from "react-spinners";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";

const SpotForecast = ({ province, locality, name, latitude, longitude, mapLink }) => {
  const { isError, isLoading, data, error } = useQuery({
    queryKey: [`${latitude} - ${longitude}`],
    queryFn: ({ signal }) =>
      getSpotWeather({
        signal,
        latitude,
        longitude,
      }),
  });

  const responsive = {
    xxl: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
      slidesToSlide: 1,
    },
    xl: {
      breakpoint: { max: 992, min: 1200 },
      items: 4,
      slidesToSlide: 1,
    },
    lg: {
      breakpoint: { max: 768, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    md: {
      breakpoint: { max: 768, min: 577 },
      items: 2,
      slidesToSlide: 1,
    },
    sm: {
      breakpoint: { max: 576, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    xs: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  let content;
  if (isError) {
    content = (
      <div className="text-center my-24 mx-auto">
        <p> {error.info.status_message || "Error: could not fetch data"}</p>
        <p>Status: {error.code || "unknown"}</p>
      </div>
    );
  }
  if (isLoading) {
    content = (
      <div className=" text-center my-24 mx-auto">
        <ClipLoader color="green" />
      </div>
    );
  }
  if (data) {
    console.log(data);
    content = (
      <>
        <Row className="my-3">
          <h5 className=" mb-0 fw-bold fs-5">Current conditions:</h5>
          <div className="mt-3 ps-5 bg-body-tertiary shadow px-1 py-2 rounded">
            <p className="fw-bold my-0 fs-smaller">
              <IoTimeOutline className="me-1" />
              {data.current.time.split("T")[1]}
            </p>
            <Row className="my-3">
              <Col xs={12} md={5} className="">
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

              <Col xs={12} md={5} className="">
                <p className="fs-smaller my-0">
                  Wave height: {data.current.wave_height} {data.current_units.wave_height}
                </p>
                <p className="fs-smaller my-0">
                  Wave period: {data.current.wave_period} {data.current_units.wave_period}
                </p>

                <p className="fs-smaller my-0">
                  Wave direction:{" "}
                  <FaLongArrowAltUp style={{ transform: `rotate(${data.current.wave_direction}deg)` }} />
                </p>
              </Col>
            </Row>
          </div>
        </Row>
        <Row className="mb-3">
          <h5 className=" mb-0 fw-bold fs-5">Hourly forecast:</h5>
          <Carousel
            data-testid="carousel"
            containerClass="carousel-container"
            responsive={responsive}
            centerMode={true}
            infinite={true}
            swipeable
          >
            {data.hourly.time.map((time, index) => (
              <div key={index} className="mt-3 mb-4 mx-1 bg-body-tertiary shadow px-1 py-2 rounded">
                <p className="fw-bold my-0 text-center d-flex justify-content-between">
                  <span className="ms-2">
                    {time.split("-")[2].split("T")[0]}-{time.split("-")[1]}
                  </span>
                  <span className="me-2">{time.split("T")[1]}</span>
                </p>
                <p className="fs-smaller my-0 text-center">
                  Swell height: {data.hourly.swell_wave_height[index]} {data.hourly_units.swell_wave_height}
                </p>

                <p className="fs-smaller my-0 text-center">
                  Swell direction:{" "}
                  <FaLongArrowAltUp style={{ transform: `rotate(${data.hourly.swell_wave_direction[index]}deg)` }} />
                </p>
                <p className="fs-smaller my-0 text-center">
                  Period: {data.hourly.swell_wave_period[index]} {data.hourly_units.swell_wave_period}
                </p>
              </div>
            ))}
          </Carousel>
        </Row>
        <Row className="mb-3">
          <h5 className=" mb-0 fw-bold fs-5">7 days forecast:</h5>
          <Carousel
            data-testid="carousel"
            containerClass="carousel-container"
            responsive={responsive}
            centerMode={true}
            infinite={true}
            swipeable
          >
            {data.daily.time.map((time, index) => (
              <div key={index} className="mt-3 mb-4 mx-1 bg-body-tertiary shadow px-1 py-2 rounded">
                <p className="fw-bold my-0 text-center">
                  {time.split("-")[2]}-{time.split("-")[1]}
                </p>
                <p className="fs-smaller my-0 text-center">
                  Max height: {data.daily.swell_wave_height_max[index]} {data.daily_units.swell_wave_height_max}
                </p>
                <p className="fs-smaller my-0 text-center">
                  Max period: {data.daily.swell_wave_period_max[index]} {data.daily_units.swell_wave_period_max}
                </p>

                <p className="fs-smaller my-0 text-center">
                  Swell direction:{" "}
                  <FaLongArrowAltUp
                    style={{ transform: `rotate(${data.daily.swell_wave_direction_dominant[index]}deg)` }}
                  />
                </p>
              </div>
            ))}
          </Carousel>
        </Row>
      </>
    );
  }
  return (
    <Card id="forecastCard" className="border-0 my-3 mx-auto w-75 bg-secondary bg-opacity-10">
      <iframe
        className="mt-3"
        id="map"
        title="map"
        src={mapLink}
        style={{ width: "100%", aspectRatio: "3/1" }}
        allowFullScreen={true}
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Card.Body>
        <Card.Title className="fw-bold fs-3">
          {name} - {locality} ({province})
        </Card.Title>
        {content}
      </Card.Body>
    </Card>
  );
};

export default SpotForecast;
