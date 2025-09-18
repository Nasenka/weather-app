import { useData } from "./hooks/useData";
import { Weather } from "./types";
import { Header } from "./components/Header";
import { CurrentWeather } from "./components/CurrentWeather";
import { HourlyForecast } from "./components/HourlyForecast";
import { Forecast } from "./components/Forecast";
import { WeatherDetails } from "./components/WeatherDetails";

function App() {
  const params = new URLSearchParams({
    key: "74a0b2eb70734b2386b112839250506",
    q: "Yerevan",
    days: "3",
    alerts: "yes",
  });
  const { data: weather, error } = useData<Weather>(
    `http://api.weatherapi.com/v1/forecast.json?${params}`
  );

  console.log("weather", weather);
  console.log("error", error);

  if (!weather) {
    return <Header />;
  }

  const { current, forecast, location } = weather;

  return (
    <div className="container mx-auto max-w-7xl">
      <Header />
      <CurrentWeather
        currentWeather={current}
        location={location}
        currentForecastDay={forecast?.forecastday[0]?.day}
      />
      <HourlyForecast />
      <Forecast />
      <WeatherDetails />
      <hr className="mt-10 mb-10" />
      <div>
        <p>Добавить:</p>
        <ul className="list-inside list-disc mt-2 mb-2">
          <li>Переход на конечные страницы каждого дня</li>
          <li>Переключатель C/F</li>
          <li>Сделать loading</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
