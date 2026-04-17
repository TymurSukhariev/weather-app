import { motion } from "framer-motion";

export function Overlay() {
    return <motion.div className="absolute inset-0 bg-black bg-opacity-50 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
    />
}