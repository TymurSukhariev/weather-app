import { motion } from "framer-motion";


export function SearchPlaceholder({ isOpen }: { isOpen: boolean }) {
    return (
        <motion.div className="flex-1 flex justify-center items-center text-gray-300 z-20"
            initial={{ paddingLeft: "300px" }}
            animate={{ paddingLeft: isOpen ? "300px" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            🔎 Search for a location to see the weather information
        </motion.div>
    );
}