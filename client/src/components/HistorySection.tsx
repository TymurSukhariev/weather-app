import { LocationData } from "@/types/types";

export function HistorySection({ history }: { history: LocationData[] }) {
    return (
        <div>
            <h1>History</h1>
            <ul>
                {history.map((location) => (
                    <li key={location.id}>{location.cityName}</li>
                ))}
            </ul>
        </div>
    )
}