export const getSpotMarineWeather = async ({ signal, latitude, longitude }) => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&current=wave_height,wave_direction,wave_period,wind_wave_height,wind_wave_direction,wind_wave_period,wind_wave_peak_period,swell_wave_height,swell_wave_direction,swell_wave_period,swell_wave_peak_period&hourly=wave_height,wave_direction,wave_period,wind_wave_height,wind_wave_direction,wind_wave_period,wind_wave_peak_period,swell_wave_height,swell_wave_direction,swell_wave_period,swell_wave_peak_period&daily=wave_height_max,wave_direction_dominant,wave_period_max,wind_wave_height_max,wind_wave_direction_dominant,wind_wave_period_max,wind_wave_peak_period_max,swell_wave_height_max,swell_wave_direction_dominant,swell_wave_period_max,swell_wave_peak_period_max&timezone=Europe%2FBerlin&models=best_match`,
    requestOptions
  );
  if (!response.ok) {
    const error = new Error("An error occurred while fetching data");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
};

export const getSpotWeather = async ({ signal, latitude, longitude }) => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,pressure_msl,surface_pressure,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapour_pressure_deficit,wind_speed_10m,wind_direction_10m,temperature_80m,uv_index,uv_index_clear_sky,is_day,cape,freezing_level_height,sunshine_duration&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&models=best_match`,
    requestOptions
  );
  if (!response.ok) {
    const error = new Error("An error occurred while fetching data");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
};

export function direction(d) {
  if (d >= 0 && d < 22.5) {
    return "N";
  } else if (d >= 22.5 && d < 67.5) {
    return "NE";
  } else if (d >= 67.5 && d < 112.5) {
    return "E";
  } else if (d >= 112.5 && d < 157.5) {
    return "SE";
  } else if (d >= 157.5 && d < 202.5) {
    return "S";
  } else if (d >= 202.5 && d < 247.5) {
    return "SW";
  } else if (d >= 247.5 && d < 292.5) {
    return "W";
  } else if (d >= 292.5 && d < 337.5) {
    return "NW";
  } else if (d >= 337.5 && d < 360) {
    return "N";
  } else {
    return "-";
  }
}
