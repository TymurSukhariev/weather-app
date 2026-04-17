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
        <div className="min-w-0 rounded-2xl bg-[#1E1E1E] mt-2 p-4">
            <h2 className="text-xl  mb-4 text-white">Daily Forecast</h2>
            <div className="flex flex-col pb-2 rounded-2xl shadow-sm h-[300px] 2xl:h-[350px] overflow-y-auto">
                {items.map((item) => (
                    <div
                        key={`${item.day}-${item.iconCode}`}
                        className="flex min-w-[64px] items-center gap-2 bg-[#272727] rounded-2xl px-4 py-3 mb-2 justify-between"
                    >
                        <span className="text-xl text-white">{item.day}</span>

                        <img
                            src={`/weather-icons/${item.iconCode}.png`}
                            alt={item.iconCode}
                            className="h-12 w-12"
                        />

                        <p className="text-lg font-medium text-gray-400">{item.minTemp}°
                            <span className="text-gray-600 text-lg"> / </span>
                            <span className="text-white text-lg">{item.maxTemp}°</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}