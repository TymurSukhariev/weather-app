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
        <main className="rounded-2xl bg-[#1E1E1E] pt-2 w-[720px] 2xl:w-[1100px]">
            <h1 className="text-white text-xl ml-4">Hourly Forecast</h1>
            <div className="flex gap-4 overflow-x-auto  p-4 shadow-sm  items-center">
                {items.map((item) => (
                    <div
                        key={`${item.timeLabel}-${item.iconCode}`}
                        className="flex min-w-[74px] flex-col items-center gap-2 h-[150px] bg-[#272727] py-3 rounded-3xl"
                    >
                        <span
                            className="
                            relative text-sm text-[#D4D4D4]
                            after:absolute after:left-1/2 after:-translate-x-1/2
                            after:bottom-[-6px]
                            after:h-[1px] after:w-6
                            after:bg-gradient-to-r
                            after:from-[#363636]
                            after:via-[#7E7E7E]
                            after:to-[#363636]
                    ">
                            {item.timeLabel}
                        </span>

                        <img
                            src={`/weather-icons/${item.iconCode}.png`}
                            alt={item.iconCode}
                            className="h-12 w-12 my-1"
                        />

                        <span className="text-md font-semibold text-white">{item.temperature}°</span>
                    </div>
                ))}
            </div>
        </main>
    );
}