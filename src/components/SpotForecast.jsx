import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { FaLongArrowAltUp } from "react-icons/fa";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { WiBarometer, WiCloudy, WiHumidity, WiThermometer } from "react-icons/wi";
import { FaStar } from "react-icons/fa";
import { addToFavorites, removeFromFavorites } from "../store/favouriteSlice";
import { getSpotMarineWeather, getSpotWeather } from "../utils/http";
import CurrentCondition from "./CurrentCondition";
import ConditionEvaluation from "./ConditionEvaluation";

const SpotForecast = ({ province, locality, name, latitude, longitude, mapLink, id }) => {
  const [forecastType, setForecastType] = useState("Daily");
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const {
    isError: isErrorMarine,
    isLoading: isLoadingMarine,
    data: marine,
    error: errorMarine,
  } = useQuery({
    queryKey: [`marine ${latitude} - ${longitude}`],
    queryFn: ({ signal }) =>
      getSpotMarineWeather({
        signal,
        latitude,
        longitude,
      }),
  });

  const {
    isError: isErrorWeather,
    isLoading: isLoadingWeather,
    data: weather,
    error: errorWeather,
  } = useQuery({
    queryKey: [`weather ${latitude} - ${longitude}`],
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

  const isInFavorites = favorites.some((fav) => fav.id === id);

  const handleFavorite = (spot) => {
    if (isInFavorites) {
      dispatch(removeFromFavorites(spot));
    } else {
      dispatch(addToFavorites(spot));
    }
  };

  const responsive = {
    xxl: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
      slidesToSlide: 3,
    },
    xl: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
      slidesToSlide: 2,
    },
    lg: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
      slidesToSlide: 2,
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

  return (
    <Card id="spotForecast" className="shadow mx-auto ">
      <Card.Body>
        <Card.Title className="my-1 text-center">
          {name} ({province})
        </Card.Title>
        <div className="text-end fs-3">
          <FaStar
            className={isInFavorites ? "yellow" : undefined}
            onClick={() =>
              handleFavorite({
                province,
                locality,
                name,
                latitude,
                longitude,
                mapLink,
                id,
              })
            }
          />
        </div>
        <iframe
          className="mt-3"
          id="map"
          title="map"
          src={mapLink}
          style={{ width: "100%", aspectRatio: "3/1" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <hr />
        {isErrorMarine && (
          <div className="text-center my-24 mx-auto">
            <p> {errorMarine.info || "Error: could not fetch data"}</p>
            <p>Status: {errorMarine.code || "unknown"}</p>
          </div>
        )}

        {isErrorWeather && (
          <div className="text-center my-24 mx-auto">
            <p> {errorWeather.info || "Error: could not fetch data"}</p>
            <p>Status: {errorWeather.code || "unknown"}</p>
          </div>
        )}

        {isLoadingMarine ||
          (isLoadingWeather && (
            <div className=" text-center my-24 mx-auto">
              <ClipLoader color="green" />
            </div>
          ))}

        {marine && weather && (
          <>
            <Row className="my-3">
              <div className="mt-3 py-2">
                <CurrentCondition dataMarine={marine} dataWeather={weather} />
              </div>
            </Row>
            <Row className="my-3">
              <Col xs={12} md={8} className="mb-3 fw-bold d-flex justify-content-between align-items-center">
                <Row className="d-flex ">
                  <Col xs={6} className="d-flex align-items-center">
                    <LuSunrise className="ms-1 lightBlue" /> {weather.daily.sunrise[0].split("T")[1]}
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                    <LuSunset className="ms-1 lightBlue" /> {weather.daily.sunset[0].split("T")[1]}
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                    <WiHumidity className="lightBlue fs-4" />
                    {weather.current.relative_humidity_2m} {weather.current_units.relative_humidity_2m}
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                    <WiCloudy className="lightBlue fs-4" />
                    {weather.current.cloud_cover} {weather.current_units.cloud_cover}
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                    <WiBarometer className="lightBlue fs-4" />
                    {weather.current.pressure_msl} {weather.current_units.pressure_msl}
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                    <WiThermometer className="lightBlue fs-4" />
                    {weather.current.temperature_2m} {weather.current_units.temperature_2m}
                  </Col>
                </Row>
              </Col>

              <Col xs={12} md={4}>
                <ConditionEvaluation wave_height={marine.current.swell_wave_height} />
              </Col>
            </Row>
            <hr />
            <ButtonGroup>
              <Button
                variant="transparent"
                className={"darkBlueBackground text-light fw-bold"}
                onClick={() => setForecastType("Daily")}
              >
                Daily
              </Button>
              <Button
                variant="transparent"
                className={"darkBlueBackground text-light fw-bold"}
                onClick={() => setForecastType("Hourly")}
              >
                Hourly
              </Button>
            </ButtonGroup>
            {forecastType === "Hourly" && (
              <Carousel
                data-testid="carousel"
                containerClass="carousel-container"
                responsive={responsive}
                centerMode={true}
                infinite={true}
                swipeable
              >
                {marine.hourly.time.map((time, index) => (
                  <div key={index} className="mt-3 mb-4 mx-1 bg-body-tertiary shadow px-1 py-2 rounded">
                    <p className="fw-bold my-0 text-center d-flex justify-content-between">
                      <span className="ms-2">
                        {time.split("-")[2].split("T")[0]}/{time.split("-")[1]}
                      </span>
                      <span className="me-2">{time.split("T")[1]}</span>
                    </p>
                    <hr />
                    <p className="fs-smaller my-0 text-center">
                      Swell: {marine.hourly.swell_wave_height[index]} {marine.hourly_units.swell_wave_height}
                    </p>

                    <p className="fs-smaller my-0 text-center">
                      Direction:{" "}
                      <FaLongArrowAltUp
                        style={{ transform: `rotate(${marine.hourly.swell_wave_direction[index] - 180}deg)` }}
                      />
                    </p>
                    <p className="fs-smaller my-0 text-center">
                      Period: {marine.hourly.swell_wave_period[index]} {marine.hourly_units.swell_wave_period}
                    </p>
                  </div>
                ))}
              </Carousel>
            )}
            {forecastType === "Daily" && (
              <Carousel
                data-testid="carousel"
                containerClass="carousel-container"
                responsive={responsive}
                centerMode={true}
                infinite={true}
                swipeable
              >
                {marine.daily.time.map((time, index) => (
                  <div key={index} className="mt-3 mb-4 mx-1 bg-body-tertiary shadow px-1 py-2 rounded">
                    <p className="fw-bold my-0 text-center">
                      {time.split("-")[2]}/{time.split("-")[1]}
                    </p>
                    <hr />
                    <p className="fs-smaller my-0 text-center">
                      Max height: {marine.daily.swell_wave_height_max[index]} {marine.daily_units.swell_wave_height_max}
                    </p>
                    <p className="fs-smaller my-0 text-center">
                      Max period: {marine.daily.swell_wave_period_max[index]} {marine.daily_units.swell_wave_period_max}
                    </p>

                    <p className="fs-smaller my-0 text-center">
                      Swell direction:{" "}
                      <FaLongArrowAltUp
                        style={{ transform: `rotate(${marine.daily.swell_wave_direction_dominant[index] - 180}deg)` }}
                      />
                    </p>
                  </div>
                ))}
              </Carousel>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default SpotForecast;
