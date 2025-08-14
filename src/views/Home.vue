<template>
    <div class="home">
        <h3>
            diego camargo
        </h3>
        <div class="date-time">
            <p>
                {{ currentDate }}
            </p>
            <p>
                {{ currentTime }}
            </p>
        </div>
        <div v-if="weather" class="weather">
            <p>
                {{ weather.temp }}° with {{ weather.description }} @ {{ weather.city }}<span v-if="weather.country">, {{ weather.country }}</span>
            </p>
        </div>
        <p v-else-if="weatherError" class="error">
            {{ weatherError }}
        </p>
        <p v-else class="loading">
            loading weather...
        </p>
        <img src="../assets/espeon-umbreon.gif">
    </div>
</template>

<script>
import { getCurrentDateTime } from '../utilities/dateTime';
import { getUserPosition } from '../utilities/geolocate';
import { getCurrentWeather } from '../utilities/api/weather';

export default {
    data() {
        return {
            currentDate: "",
            currentTime: "",
            weather: null,
            weatherError: ""
        };
    },
    methods: {
        updateDateTime() {
            const { currentDate, currentTime } = getCurrentDateTime();
            this.currentDate = currentDate;
            this.currentTime = currentTime;
        },
        async loadWeather() {
            try {
                const { lat, lon } = await getUserPosition();
                this.weather = await getCurrentWeather({ lat, lon, units: "imperial" });
            } catch (e) {
                this.weatherError = "unable to get weather (location blocked or unavailable)";
                console.error(e);
      }
    }
    },
    mounted() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000);
        this.loadWeather();
    }
};
</script>

<style scoped>
    .home h3 {
        font-size: 2rem;
    }

    .home p {
        font-size: 1.5rem;
        line-height: 1.2;
    }

    .home img {
        height: 10rem;
    }

    .home a {
        color: #66ccee;
    }

    .home a:hover {
        color: #5782a6;
    }

    .weather {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>