import { useData } from "./hooks/useData";
import { Weather } from "./types";

function App() {
  const params = new URLSearchParams({
    key: "74a0b2eb70734b2386b112839250506",
    q: "Yerevan",
    days: "3",
    alerts: "yes",
  });
  const weather: Weather | null = useData(
    `http://api.weatherapi.com/v1/forecast.json?${params}`
  );

  console.log("weather", weather);

  return (
    <div className="container mx-auto max-w-7xl">
      <header className="pt-4 pb-4 flex flex-row gap-2 justify-between items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Прогноз погоды</h1>
          <div className="text-slate-500">Дата</div>
        </div>
        <div className="pt-1 pb-1 pr-8 pl-8 border-2 rounded-2xl">Поиск</div>
      </header>
      <section className="mt-4 mb-4 p-4 border-2 rounded-2xl flex flex-row gap-2 justify-between">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <span>Город</span>
            <span>Страна</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>'Температура'</span>
            <span>Ощущается как ...</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>'иконка' + Облачно/солнечно...</span>
          <span>'иконка' + Максимальная температура</span>
          <span>'иконка' + Минимальная температура</span>
          <span>'иконка' + Ветр</span>
          <span>'иконка' + Влажность</span>
        </div>
      </section>
      <section className="mt-4 mb-4 p-4 border-2 rounded-2xl">
        <p>Почасовой прогноз на сегодня (слайдер)</p>
        <div className="mt-2 mb-2 flex gap-4">
          <div className="p-2 border-2 rounded-2xl">
            <p>время</p>
            <p>иконка</p>
            <p>температура</p>
            <p>влажность</p>
          </div>
          <div className="p-2 border-2 rounded-2xl">
            <p>время</p>
            <p>иконка</p>
            <p>температура</p>
            <p>влажность</p>
          </div>
          <div className="p-2 border-2 rounded-2xl">
            <p>время</p>
            <p>иконка</p>
            <p>температура</p>
            <p>влажность</p>
          </div>
          <div className="p-2 border-2 rounded-2xl">
            <p>время</p>
            <p>иконка</p>
            <p>температура</p>
            <p>влажность</p>
          </div>
          <div className="p-2 border-2 rounded-2xl">
            <p>время</p>
            <p>иконка</p>
            <p>температура</p>
            <p>влажность</p>
          </div>
          <div className="p-2 border-2 rounded-2xl">
            <p>время</p>
            <p>иконка</p>
            <p>температура</p>
            <p>влажность</p>
          </div>
        </div>
      </section>
      <section className="mt-4 mb-4 p-4 border-2 rounded-2xl">
        <p>Прогноз на ... дней</p>
        <p>десктоп (слайдером)</p>
        <div className="mt-2 mb-2 flex gap-4">
          <div className="p-2 border-2 rounded-2xl">
            <p>день недели (или число)</p>
            <p>иконка</p>
            <p>температура мин/макс</p>
            <p>влажность</p>
          </div>
          <div className="p-2 border-2 rounded-2xl">
            <p>день недели (или число)</p>
            <p>иконка</p>
            <p>температура мин/макс</p>
            <p>влажность</p>
          </div>
          <div className="p-2 border-2 rounded-2xl">
            <p>день недели (или число)</p>
            <p>иконка</p>
            <p>температура мин/макс</p>
            <p>влажность</p>
          </div>
          <div className="p-2 border-2 rounded-2xl">
            <p>день недели (или число)</p>
            <p>иконка</p>
            <p>температура мин/макс</p>
            <p>влажность</p>
          </div>
        </div>
        <hr className="mt-4 mb-4" />
        <p>мобилка (в столбец)</p>
        <div className="mt-2 mb-2 flex flex-col gap-4">
          <div className="p-2 border-2 rounded-2xl flex flex-row justify-between">
            <p>день недели (или число)</p>
            <p>иконка</p>
            <p>температура мин/макс</p>
          </div>
          <div className="p-2 border-2 rounded-2xl flex flex-row justify-between">
            <p>день недели (или число)</p>
            <p>иконка</p>
            <p>температура мин/макс</p>
          </div>
          <div className="p-2 border-2 rounded-2xl flex flex-row justify-between">
            <p>день недели (или число)</p>
            <p>иконка</p>
            <p>температура мин/макс</p>
          </div>
        </div>
      </section>
      <section className="mt-4 mb-4 p-4 border-2 rounded-2xl">
        <p>Всякие показатели</p>
        <div className="mt-2 mb-2 flex gap-4">
          <div className="p-10 border-2 rounded-2xl">
            <p>Скорость ветра</p>
          </div>
          <div className="p-10 border-2 rounded-2xl">
            <p>Влажность</p>
          </div>
          <div className="p-10 border-2 rounded-2xl">
            <p>УФ-индекс</p>
          </div>
          <div className="p-10 border-2 rounded-2xl">
            <p>Давление</p>
          </div>
          <div className="p-10 border-2 rounded-2xl">
            <p>Восход/закат</p>
          </div>
          <div className="p-10 border-2 rounded-2xl">
            <p>Осадки??</p>
          </div>
          <div className="p-10 border-2 rounded-2xl">
            <p>Еще что-нибудь</p>
          </div>
        </div>
      </section>
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
