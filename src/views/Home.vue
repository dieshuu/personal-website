<template>
    <div class="home">
        <h3>diego camargo</h3>
        <p>
            email:
            <a href="mailto:diegocamargo@tamu.edu">
                diegocamargo@tamu.com
            </a>
        </p>
        <div class="date-time">
            <p>
                {{ currentDate }}
            </p>
            <p>
                {{ currentTime }}
            </p>
        </div>
        <img src="../assets/espeon-umbreon.gif">
    </div>
</template>

<script>
import { getCurrentDateTime } from '../utilities/dateTime';

export default {
    data() {
        return {
            currentDate: "",
            currentTime: ""
        };
    },
    methods: {
        updateDateTime() {
            const { currentDate, currentTime } = getCurrentDateTime();
            this.currentDate = currentDate;
            this.currentTime = currentTime;
        }
    },
    mounted() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000);
    }
};
</script>

<style scoped>
    .home h3 {
        font-size: 2rem;
    }

    .home p {
        font-size: 1.5rem;
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
</style>