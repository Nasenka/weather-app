export function WeatherDetails() {
  return (
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
  );
}
