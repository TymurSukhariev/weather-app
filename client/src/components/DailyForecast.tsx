type DailyForecastItem = {
    day: string;
    minTemp: number;
    maxTemp: number;
    iconCode: string;
};

type DailyForecastProps = {
    items: DailyForecastItem[];
};


export function DailyForecast({ items }: DailyForecastProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Daily Forecast</h2>
            <div className="flex gap-4 overflow-x-auto pb-2 rounded-2xl border bg-white/70 p-4 shadow-sm w-[800px]">
                {items.map((item) => (
                    <div
                        key={`${item.day}-${item.iconCode}`}
                        className="flex min-w-[64px] flex-col items-center gap-2"
                    >
                        <span className="text-xs text-gray-500">{item.day}</span>

                        <img
                            src={`/weather-icons/${item.iconCode}.png`}
                            alt={item.iconCode}
                            className="h-8 w-8"
                        />

                        <span className="text-sm font-medium">{item.minTemp}° / {item.maxTemp}°</span>
                    </div>
                ))}
            </div>
        </div>
    );
}