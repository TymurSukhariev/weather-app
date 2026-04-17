type CurrentWeatherProps = {
    temperature: number;
    condition: string;
    locationName: string;
    region: string | null;
    weekday: string;
    date: string;
    icon: string;
};

export function CurrentWeather({ temperature, condition, locationName, region, weekday, date, icon }: CurrentWeatherProps) {
    function formatCondition(condition: string) {
        return condition
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    return (
        <div className="rounded-2xl bg-[#1E1E1E] w-[400px] p-4 pb-0 mb-2">

            <div className="flex gap-2 items-center mb-4 bg-[#363636] w-fit px-3 py-1 rounded-3xl">
                <img src={`/location-icon.svg`} alt="Location icon" />
                <p className="text-white text-lg">{locationName} {region && `, ${region}`}</p>
            </div>

            <div className="flex justify-between mt-6">
                <div className="flex flex-col gap-2">
                    <p className="text-white text-3xl">{temperature}°C</p>
                    <p className="text-white">{formatCondition(condition)}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-3xl">{weekday}</h1>
                    <p className="text-white font-light">{date}</p>
                </div>
            </div>
            <img className="w-[130px] mx-auto mt-[-10px]" src={`/weather-icons/${icon}.png`} alt="Weather icon" />
        </div>


    )
}