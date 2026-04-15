type HourlyForecastItem = {
    timeLabel: string;
    temperature: number;
    iconCode: string;
};

type HourlyForecastProps = {
    items: HourlyForecastItem[];
};

export function HourlyForecast({ items }: HourlyForecastProps) {
    return (
        <div className="flex gap-4 overflow-x-auto pb-2 rounded-2xl border bg-white/70 p-4 shadow-sm w-[800px]">
            {items.map((item) => (
                <div
                    key={`${item.timeLabel}-${item.iconCode}`}
                    className="flex min-w-[64px] flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-500">{item.timeLabel}</span>

                    <img
                        src={`/weather-icons/${item.iconCode}.png`}
                        alt={item.iconCode}
                        className="h-8 w-8"
                    />

                    <span className="text-sm font-medium">{item.temperature}°</span>
                </div>
            ))}
        </div>
    );
}