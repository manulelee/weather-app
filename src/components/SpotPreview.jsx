import { useQuery } from "@tanstack/react-query";
import { Card } from "react-bootstrap";
import { getSpotMarineWeather, getSpotWeather } from "../utils/http";
import { ClipLoader } from "react-spinners";
import CurrentCondition from "./CurrentCondition";
import ConditionEvaluation from "./ConditionEvaluation";

const SpotPreview = ({ province, locality, name, latitude, longitude, mapLink, id, selectSpot }) => {
  const {
    isError: isErrorMarine,
    isLoading: isLoadingMarine,
    data: dataMarine,
    error: errorMarine,
  } = useQuery({
    queryKey: [`marine ${latitude} - ${longitude}`],
    queryFn: ({ signal }) =>
      getSpotMarineWeather({
        signal,
        latitude,
        longitude,
      }),
    refetchOnWindowFocus: false,
    refetchInterval: 36000000,
    retry: false,
  });

  const {
    isError: isErrorWeather,
    isLoading: isLoadingWeather,
    data: dataWeather,
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

  return (
    <Card
      id="spotPreview"
      className="shadow my-2"
      onClick={() => selectSpot({ province, locality, name, latitude, longitude, mapLink, id })}
    >
      <Card.Body>
        <Card.Title className="ms-2">{name}</Card.Title>
        <hr></hr>
        {isErrorMarine && (
          <div className="text-center my-24 mx-auto">
            <p>Error: could not fetch data"</p>
            <p>Status: {errorMarine.code || "unknown"}</p>
          </div>
        )}

        {isErrorWeather && (
          <div className="text-center my-24 mx-auto">
            <p>Error: could not fetch data"</p>
            <p>Status: {errorWeather.code || "unknown"}</p>
          </div>
        )}

        {isLoadingMarine ||
          (isLoadingWeather && (
            <div className=" text-center my-24 mx-auto">
              <ClipLoader color="green" />
            </div>
          ))}

        {dataMarine && dataWeather && (
          <>
            <CurrentCondition dataMarine={dataMarine} dataWeather={dataWeather} />
            <ConditionEvaluation wave_height={dataMarine.current.swell_wave_height} />{" "}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default SpotPreview;
