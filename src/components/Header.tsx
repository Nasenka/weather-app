export function Header() {
  const now = new Date().toLocaleDateString("ru-RU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <header className="pt-10 pb-10 flex flex-row gap-2 justify-between items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Прогноз погоды</h1>
        <div className="text-sm text-slate-500">{now}</div>
      </div>
      <div className="hidden pt-1 pb-1 pr-8 pl-8 border-2 rounded-2xl">
        Поиск
      </div>
    </header>
  );
}
