import { LocationData } from "@/types/types";
import { Button } from "./ui/button";


type HistorySectionProps = {
    history: LocationData[];
    onWeatherLoad: (location: LocationData) => void;
}

export function HistorySection({ history, onWeatherLoad }: HistorySectionProps) {
    return (
        <div>
            <h1>History</h1>
            <ul>
                {history.map((location) => (
                    <li key={location.id}>
                        <Button onClick={() => onWeatherLoad(location)}>
                            {location.cityName}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}