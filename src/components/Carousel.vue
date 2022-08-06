<template>
    <div class="carousel">
        <div class="arrow" @click="prev">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    d="M28.05 37.05 14.9 23.95 28.05 10.8l3.25 3.25-9.9 9.9 9.9 9.85Z"
                />
            </svg>
        </div>

        <div class="image">
            <img :src="images(character[index].src)" alt="" />
            <div>
                <span>{{ index + 1 }}</span>
                <span> / </span>
                <span>{{ character.length }}</span>
            </div>
            <div class="stats">
                <div class="row">
                    <div class="title">Name: </div>
                    <div class="info">{{ character[index].name }}</div>
                </div>
                <div class="row">
                    <div class="title">Max Level: </div>
                    <div class="info">{{ character[index].maxlevel }}</div>
                </div>
                <div class="row">
                    <div class="title">Damage: </div>
                    <div class="info">{{ character[index].dmg }}</div>
                </div>
                <div class="row">
                    <div class="title">Hit Point: </div>
                    <div class="info">{{ character[index].hitpoints }}</div>
                </div>
                <div class="row">
                    <div class="title">Ability: </div>
                    <div class="info">{{ character[index].ability }}</div>
                </div>
            </div>
        </div>

        <div class="arrow" @click="next">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    d="M18.75 37.05 15.5 33.8l9.9-9.85-9.9-9.9 3.25-3.25L31.9 23.95Z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    data() {
        return {
            index: 0,
            character: [],
            images: require.context("@/assets/images", true, /\.(png|jpe?g)$/),
        };
    },
    created() {
        this.character = [
            {
                src: "./coc_1.jpg",
                name: "Archer Queen",
                maxlevel: 80,
                dmg: 840,
                hitpoints: 3565,
                ability: 16,
            },
            {
                src: "./coc_2.jpg",
                name: "Barbarian King",
                maxlevel: 80,
                dmg: 595,
                hitpoints: 11250,
                ability: 16,
            },
            {
                src: "./coc_3.jpg",
                name: "Ground Warden",
                maxlevel: 55,
                dmg: 319,
                hitpoints: 2540,
                ability: 11,
            },
            {
                src: "./coc_4.png",
                name: "Royal Champion",
                maxlevel: 30,
                dmg: 580,
                hitpoints: 4300,
                ability: 6,
            },
        ];
    },
    methods: {
        prev: function () {
            if (this.index == 0) {
                return;
            }
            this.index--;
        },
        next: function () {
            if (this.index == this.character.length - 1) {
                return;
            }
            this.index++;
        },
    },
};
</script>

<style scoped>
.carousel {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 4rem;
}

.arrow {
    height: calc(80vw * 0.5625);
    max-height: calc(1080px * 0.5625);
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

img {
    width: 80vw;
    max-width: 1080px;
    height: calc(80vw * 0.5625);
    max-height: calc(1080px * 0.5625);
    object-fit: cover;
}

.stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.row {
    width: 60vw;
    max-width: 320px;
    display: flex;
    justify-content: space-between;
}

.title {
    width: max-content;
}

.info {
    font-weight: 700;
}

svg:hover {
    fill: red;
    cursor: pointer;
}
</style>
