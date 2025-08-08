export interface Weather {
  alerts: {
    alert: Alert[];
  };
  current: Current;
  forecast: {
    forecastday: ForecastDay[];
  };
  location: Location;
}

interface Alert {
  areas: string; // Охваченные области
  category: string;
  certainty: string; // Уверенность
  desc: string;
  effective: string;
  event: string;
  expires: string; // Истекает
  headline: string; // Заголовок оповещения
  instruction: string;
  msgType: string; // Тип оповещения. Alert, Update
  note: string;
  severity: string; // Серьезность оповещения
  urgency: string; // Срочность
}

interface Current {
  cloud: number; // Облачность в процентах
  condition: Condition;
  feelslike_c: number; // Ощущается как..., в градусах Цельсия
  gust_kph: number; // Порыв ветра в километрах в час
  humidity: number; // Влажность в процентах
  is_day: number; // Показывать ли значок дневного или ночного состояния, 1 = Yes 0 = No
  last_updated: string;
  precip_mm: number; // Количество осадков в миллиметрах
  pressure_mb: number; // Давление в миллибарах
  temp_c: number;
  uv: number; // УФ-индекс
  vis_km: number; // Видимость в километрах
  wind_degree: number; // Направление ветра в градусах
  wind_dir: string; // Направление ветра буквы
  wind_kph: number; // Скорость ветра в километрах в час
}

interface Condition {
  code: number;
  icon: string;
  text: string;
}

interface ForecastDay {
  astro: {
    is_moon_up: number; // Определите, восходит ли в данный момент луна, на основе времени захода и восхода луны в указанном месте и дате. 1 = Yes or 0 = No
    is_sun_up: number; // Определите, взошло ли в данный момент солнце, на основе времени заката и восхода солнца в указанном месте и дате. 1 = Yes or 0 = No
    moon_illumination: number; // Освещенность Луны в %
    moon_phase: string; // Фазы Луны. Возвращаемое значение: New Moon - Новолуние; Waxing Crescent - Растущий серп; First Quarter - Первая четверть; Waxing Gibbous - Растущая луна; Full Moon - Полнолуние; Waning Gibbous - Убывающая луна; Last Quarter - Последняя четверть; Waning Crescent - Убывающий серп
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
  };
  date: string;
  day: {
    avghumidity: number; // Средняя влажность в процентах
    avgtemp_c: number; // Средняя температура в градусах Цельсия за день
    avgvis_km: number; // Средняя видимость в километрах
    condition: Condition;
    daily_chance_of_rain: number; // Вероятность дождя в процентах
    daily_chance_of_snow: number; // Вероятность снега в процентах
    daily_will_it_rain: number; // Будет ли дождь или нет? 1 = Yes 0 = No
    daily_will_it_snow: number; // Будет ли снег или нет? 1 = Yes 0 = No
    maxtemp_c: number;
    maxwind_kph: number; // Максимальная скорость ветра в километрах в час
    mintemp_c: number;
    totalprecip_mm: number; // Общее количество осадков в миллиметрах
    totalsnow_cm: number; // Общее количество выпавшего снега в сантиметрах
    uv: number; // УФ-индекс
  };
  hour: Hour[];
}

interface Hour {
  chance_of_rain: number; // Вероятность дождя в процентах
  chance_of_snow: number; // Вероятность снега в процентах
  cloud: number; // Облачность в процентах
  condition: Condition;
  feelslike_c: number; // Ощущение, что температура по Цельсию
  gust_kph: number; // Порыв ветра в километрах в час
  humidity: number;
  is_day: number; // Показывать ли значок дневного или ночного состояния. 1 = Yes 0 = No
  precip_mm: number; // Количество осадков в миллиметрах
  pressure_mb: number; // Давление в миллибарах
  snow_cm: number; // Снегопад в сантиметрах
  temp_c: number;
  time: string; // Дата и время
  uv: number; // УФ-индекс
  vis_km: number; // Видимость в километрах
  will_it_rain: number; // Будет ли дождь или нет? 1 = Yes 0 = No
  will_it_snow: number; // Будет снег или нет? 1 = Yes 0 = No
  wind_degree: number; // Направление ветра в градусах
  wind_dir: string; // Направление ветра по 16-бальной шкале компаса. Например: Новый Южный Уэльс.
  wind_kph: number; // Максимальная скорость ветра в километрах в час
}

interface Location {
  country: string;
  lat: number; // Широта в десятичных градусах
  localtime: string;
  localtime_epoch: number;
  lon: number; // Долгота в десятичных градусах
  name: string;
  region: string; // Регион или штат местонахождения, если доступно
  tz_id: string; // Time zone name
}
