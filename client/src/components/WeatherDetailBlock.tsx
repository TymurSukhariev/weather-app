type WeatherDetailBlockProps = {
    label: string;
    value: string;
    icon: string;
}
export function WeatherDetailBlock({ label, value, icon }: WeatherDetailBlockProps) {
    return (
        <div className="bg-[#272727] rounded-3xl flex flex-col  h-[95px]  2xl:h-[125px] p-2 justify-between">
            <div className="flex items-center mb-1">
                <img src={`/weather-details-icons/${icon}.svg`} alt={label} className="mr-2 w-9 h-9" />
                <h3 className="font-light text-white text-lg">{label}</h3>
            </div>
            <span className="ml-2 text-white self-end text-2xl">{value}</span>
        </div>
    )
}