export function getCurrentDateTime() {
    const now = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const currentDate = now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone
    })
    .toLowerCase();

    const currentTime = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone
    })
    .toLowerCase();

    return { currentDate, currentTime };
}