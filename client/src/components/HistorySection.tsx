import { LocationData } from "@/types/types";
import { Button } from "./ui/button";
import { motion } from "framer-motion";


type HistorySectionProps = {
    history: LocationData[];
    onWeatherLoad: (location: LocationData) => void;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HistorySection({ history, onWeatherLoad, isOpen, setIsOpen }: HistorySectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="absolute bottom-8 text-white"
        >
            <h1 className="text-xl mb-2">History</h1>
            <ul>
                {history.map((location) => (
                    <li key={location.id}>
                        <Button className="text-gray-500 hover:text-white"
                            onClick={() => {
                                onWeatherLoad(location);
                                setIsOpen(false);
                            }
                            }>
                            {location.cityName} {location?.region && `, ${location.region}`}
                        </Button>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}