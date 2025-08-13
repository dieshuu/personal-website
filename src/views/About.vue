<template>
    <div class="about-me">
        <h3>about me</h3>
        <p>
            hello! my name is diego camargo and i am currently a senior at 
            <span style="color: #efcb69;">texas a&m university</span> 
            studying 
            <span style="color: #c64863;">electrical engineering</span>.
        </p>
        <p>
            this past summer, i interned at 
            <span style="color: #efcb69;">q2 software</span> 
            as a 
            <span style="color: #c64863;">software engineering intern</span> 
            on the precisionlender pricing team.
        </p>
        <p>
            during my free time, i enjoy playing vietnamese cards and listening to house music.
        </p>
        <p>
            if you want to contact me, here are my socials:
        </p>
        <div class="social-media">
            <div class="social-link">
                <a href="https://github.com/dieshuu">
                    <p>github</p>
                </a>
            </div>
            <div class="social-link">
                <a href=https://www.linkedin.com/in/dcamargo04/>
                    <p>linkedin</p>
                </a>
            </div>
            <div class="social-link">
                <a href=https://www.instagram.com/diego.camargo_/>
                    <p>instagram</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-me h3 {
        font-size: 2rem;
    }

    .about-me p {
        font-size: 1.5rem;
    }

    .about-me .social-media {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
    }

    .about-me .social-link a {
        color: #66ccee;
    }

    .about-me .social-link a:hover {
        color: #5782a6;
    }

    .about-me .social-link p {
        font-size: 1.5rem;
    }
</style>