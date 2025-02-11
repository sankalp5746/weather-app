import React from "react";

const WeatherCard = ({ data }) => {
  const { location, current } = data;
  const iconUrl = `https:${current.condition.icon}`; // WeatherAPI provides full icon URLs

  return (
    <div className="weather-card">
      <h2>{location.name}, {location.country}</h2>
      <img src={iconUrl} alt={current.condition.text} />
      <p>{current.condition.text}</p>
      <div className="weather-details">
        <p>🌡️ Temperature: {current.temp_c}°C</p>
        <p>💧 Humidity: {current.humidity}%</p>
        <p>🌬️ Wind Speed: {current.wind_kph} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;