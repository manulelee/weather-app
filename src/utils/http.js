export const getSpotWeather = async ({ signal, latitude, longitude }) => {
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
