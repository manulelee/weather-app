import { Col, Row } from "react-bootstrap";
import { FaLongArrowAltUp } from "react-icons/fa";
import { LuWaves, LuWind } from "react-icons/lu";
import { direction } from "../utils/http";

const CurrentCondition = ({ dataMarine, dataWeather }) => {
  return (
    <Row className="my-1 ">
      {dataMarine.current.swell_wave_height > 1.6 && <h6 className=" darkGreen">VERY GOOD</h6>}
      <Col xs={6} className="text-center">
        <h5 className="swellLabel darkBlue">
          <LuWaves className="lightBlue" /> SWELL
        </h5>
        <p className="swellValue">
          {dataMarine.current.swell_wave_height.toFixed(1)}
          <span className="fs-6">{dataMarine.current_units.swell_wave_height}</span>
        </p>
        <div>
          <p className="mb-0">
            <FaLongArrowAltUp style={{ transform: `rotate(${dataMarine.current.swell_wave_direction - 180}deg)` }} />{" "}
            {direction(dataMarine.current.swell_wave_direction)} {dataMarine.current.swell_wave_direction}
            {dataMarine.current_units.swell_wave_direction}
          </p>
          <p className="mb-0">
            Period: {Math.round(dataMarine.current.swell_wave_period)}
            {dataMarine.current_units.swell_wave_period}
          </p>
        </div>
      </Col>
      <Col xs={6} className="text-center">
        <h5 className="windLabel darkBlue">
          <LuWind className="lightBlue" /> WIND
        </h5>
        <p className="windValue">
          {Math.round(dataWeather.current.wind_speed_10m)}
          <span className="fs-6">{dataWeather.current_units.wind_speed_10m}</span>
        </p>
        <div>
          <p className="mb-0">
            <FaLongArrowAltUp style={{ transform: `rotate(${dataWeather.current.wind_direction_10m - 180}deg)` }} />{" "}
            {direction(dataWeather.current.wind_direction_10m)} {dataWeather.current.wind_direction_10m}
            {dataWeather.current_units.wind_direction_10m}{" "}
          </p>
          <p className="mb-0">
            Precipitation: {dataWeather.current.precipitation}
            {dataWeather.current_units.precipitation}
          </p>
        </div>
      </Col>
    </Row>
  );
};
export default CurrentCondition;
