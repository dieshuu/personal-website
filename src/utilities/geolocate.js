export function getUserPosition(options = { enableHighAccuracy: true, timeout: 10000 }) {
    return new Promise ((resolve, reject) => {
        if (!navigator.geolocation) {
            return reject(new Error("Geolocation not supported"));
        }
        navigator.geolocation.getCurrentPosition(
            pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
            err => reject(err),
            options
        );
    });
}