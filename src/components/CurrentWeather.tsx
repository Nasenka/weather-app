import { Current, Day, Location } from "../types";

interface CurrentWeatherProps {
  currentWeather: Current;
  location: Location;
  currentForecastDay: Day;
}

interface Condition {
  text: string;
  image: string;
}

export function CurrentWeather({
  currentWeather,
  location,
  currentForecastDay,
}: CurrentWeatherProps) {
  const windDegree = {
    transform: `rotate(${currentWeather.wind_degree}deg)`,
  };

  const conditions: Condition[] = [
    { text: "Sunny", image: "sunny.jpg" },
    { text: "Clear", image: "clear.jpg" },
    { text: "Partly Cloudy", image: "cloudy.jpg" },
    { text: "Cloudy", image: "cloudy.jpg" },
    { text: "Overcast", image: "cloudy.jpg" },
    { text: "Mist", image: "fog.jpg" },
    { text: "Patchy rain nearby", image: "rain.jpg" },
    { text: "Patchy rain possible", image: "rain.jpg" },
    { text: "Patchy snow possible", image: "snow.jpg" },
    { text: "Patchy sleet possible", image: "snow.jpg" },
    { text: "Patchy freezing drizzle possible", image: "rain.jpg" },
    { text: "Thundery outbreaks possible", image: "thunder.jpg" },
    { text: "Thundery outbreaks in nearby", image: "thunder.jpg" },
    { text: "Blowing snow", image: "snow.jpg" },
    { text: "Blizzard", image: "snow.jpg" },
    { text: "Fog", image: "fog.jpg" },
    { text: "Freezing fog", image: "fog.jpg" },
    { text: "Patchy light drizzle", image: "rain.jpg" },
    { text: "Light drizzle", image: "rain.jpg" },
    { text: "Freezing drizzle", image: "rain.jpg" },
    { text: "Heavy freezing drizzle", image: "rain.jpg" },
    { text: "Patchy light rain", image: "rain.jpg" },
    { text: "Light rain", image: "rain.jpg" },
    { text: "Moderate rain at times", image: "rain.jpg" },
    { text: "Moderate rain", image: "rain.jpg" },
    { text: "Heavy rain at times", image: "rain.jpg" },
    { text: "Heavy rain", image: "rain.jpg" },
    { text: "Light freezing rain", image: "rain.jpg" },
    { text: "Moderate or heavy freezing rain", image: "rain.jpg" },
    { text: "Light sleet", image: "rain.jpg" },
    { text: "Moderate or heavy sleet", image: "rain.jpg" },
    { text: "Patchy light rain with thunder", image: "rain-with-thunder.jpg" },
    { text: "Thundery heavy rain", image: "rain-with-thunder.jpg" },
    { text: "Light rain shower", image: "rain.jpg" },
    { text: "Moderate or heavy rain shower", image: "rain.jpg" },
    { text: "Light sleet showers", image: "rain.jpg" },
    { text: "Moderate or heavy sleet showers", image: "rain.jpg" },
    { text: "Light snow", image: "snow.jpg" },
    { text: "Light snow showers", image: "snow.jpg" },
    { text: "Moderate or heavy snow showers", image: "snow.jpg" },
    { text: "Patchy light snow", image: "snow.jpg" },
    { text: "Patchy moderate snow", image: "snow.jpg" },
    { text: "Moderate snow", image: "snow.jpg" },
    { text: "Patchy heavy snow", image: "snow.jpg" },
    { text: "Ice pellets", image: "snow.jpg" },
    { text: "Light rain with snow", image: "rain.jpg" },
    { text: "Moderate or heavy rain with snow", image: "rain.jpg" },
    { text: "Light drizzle and snow", image: "rain.jpg" },
    { text: "Moderate or heavy drizzle and snow", image: "rain.jpg" },
    {
      text: "Moderate or heavy rain with thunder",
      image: "rain-with-thunder.jpg",
    },
    {
      text: "Moderate or heavy rain in area with thunder",
      image: "rain-with-thunder.jpg",
    },
  ];

  const currentCondition = conditions.find(
    (item) =>
      item.text.toUpperCase() === currentWeather.condition.text.toUpperCase()
  );

  return (
    <section className="relative overflow-hidden my-4 py-12 px-20 rounded-2xl flex flex-row gap-2 justify-between text-white">
      <div className="absolute top-0 left-0 z-0 w-full h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1] before:bg-black/50">
        <img
          className="object-cover w-full h-full"
          src={`./images/сonditions/${
            currentCondition ? currentCondition.image : "sunny-2.jpg"
          }`}
          alt={currentWeather.condition.text}
        />
      </div>
      <div className="flex flex-col gap-9 justify-between z-10">
        <div className="flex flex-col gap-4">
          <span className="text-5xl">{location.name}</span>
          <span className="text-sm text-gray-400">{location.country}</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="flex text-6xl">
            {Math.round(currentWeather.temp_c)}
            <span className="text-3xl">&deg;C</span>
          </span>
          <span className="text-gray-400">
            Feels like {Math.round(currentWeather.feelslike_c)}&deg;C
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-6 z-10">
        <div className="flex flex-col gap-1 items-start">
          <img
            src={currentWeather.condition.icon.replace("64x64", "128x128")}
            alt={currentWeather.condition.text}
          />
          <span className="text-sm">{currentWeather.condition.text}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center text-lg">
            <span className="w-8">
              <img
                className=""
                src="./images/icons/high-temperature.png"
                alt="high-temperature"
              />
            </span>
            {Math.round(currentForecastDay.maxtemp_c)}&deg;C
          </div>
          <div className="flex gap-2 items-center text-lg">
            <span className="w-8">
              <img
                className=""
                src="./images/icons/low-temperature.png"
                alt="low-temperature"
              />
            </span>
            {Math.round(currentForecastDay.mintemp_c)}&deg;C
          </div>
          <div className="flex gap-2 items-center text-lg">
            <span className="w-8 flex justify-center">
              <img className="w-6" src="./images/icons/wind.png" alt="wind" />
            </span>
            {currentWeather.wind_kph} km/h
            <div style={windDegree}>
              <img
                src="./images/icons/direction.png"
                className="w-4"
                alt="direction"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center text-lg">
            <span className="w-8">
              <img
                className=""
                src="./images/icons/humidity.png"
                alt="humidity"
              />
            </span>
            {currentWeather.humidity}%
          </div>
        </div>
      </div>
    </section>
  );
}
