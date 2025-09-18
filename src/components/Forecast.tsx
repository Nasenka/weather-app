export function Forecast() {
  return (
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
  );
}
