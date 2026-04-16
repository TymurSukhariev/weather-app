export function getCurrentDate(timezone: string) {
    const now = new Date();

    const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        timeZone: timezone,
    }).format(now);

    const parts = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: timezone,
    }).formatToParts(now);

    const day = parts.find(p => p.type === "day")?.value;
    const month = parts.find(p => p.type === "month")?.value;
    const year = parts.find(p => p.type === "year")?.value;

    return {
        weekday,
        date: `${day} ${month}, ${year}`,
    };
}