<template>
    <div class="carousel">

        <div class="arrow" @click="prev">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M28.05 37.05 14.9 23.95 28.05 10.8l3.25 3.25-9.9 9.9 9.9 9.85Z" />
            </svg>
        </div>

        <div class="image">
            <img :src="src" alt="">
            <div>
                <span>{{ index + 1 }}</span>
                <span> / </span>
                <span>{{ pictures.length }}</span>
            </div>
        </div>

        <div class="arrow" @click="next">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M18.75 37.05 15.5 33.8l9.9-9.85-9.9-9.9 3.25-3.25L31.9 23.95Z" />
            </svg>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            src: String,
            alt: String,
            index: 0,
            pictures: [],
            images: require.context("@/assets/images", true, /\.(png|jpe?g)$/)
        }
    },
    // src\assets\images\coc_1.jpg
    created() {
        this.pictures = ["./coc_1.jpg", "./coc_2.jpg","./coc_3.jpg","./coc_4.png","./coc_5.jpg"];
    },
    mounted() {
        this.src = this.images(this.pictures[this.index]);
    },
    methods: {
        prev: function () {
            if (this.index == 0) {
                return;
            }
            this.index--;
            this.src = this.images(this.pictures[this.index]);
        },
        next: function () {
            if (this.index == this.pictures.length - 1) {
                return;
            }
            this.index++;
            this.src = this.images(this.pictures[this.index]);
        }
    }
}
</script>

<style scoped>
.carousel {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.arrow {
    user-select: none;
}

img {
    width: 80vw;
    max-width: 1080px;
    height: calc(80vw * 0.5625);
    max-height: calc(1080px * 0.5625);
    object-fit: cover;
}

svg:hover {
    fill: red;
    cursor: pointer;
}
</style>