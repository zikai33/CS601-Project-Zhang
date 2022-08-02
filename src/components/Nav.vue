<template>
    <div class="navBar" ref="outer">
        <div v-show="name" class="name">
            <router-link to="/">
                <div>
                    <a>Z</a><a>i</a><a>k</a><a>a</a><a>i</a>
                    <a>&nbsp;</a>
                    <a>Z</a><a>h</a><a>a</a><a>n</a><a>g</a>
                </div>
            </router-link>
        </div>
        <nav v-show="nav" @click="showName">
            <router-link to="/"><a>Home</a></router-link>
            <router-link to="/about"><a>About</a></router-link>
            <router-link to="/education"><a>Education</a></router-link>
            <router-link to="/resume"><a>Résumé</a></router-link>
            <router-link to="/game"><a>Game</a></router-link>
            <router-link to="/contact"><a>Contact</a></router-link>
        </nav>
        <div v-show="menu" class="menu" @click="showNav">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <path fill="#fff"
                    d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z"
                    class="color000 svgShape" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            name: true,
            nav: true,
            menu: true
        }
    },

    created() {
        this.onResize();
    },

    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    methods: {
        showNav: function () {
            this.nav = true;
            this.menu = false;
            this.name = false;
            this.$refs.outer.style.justifyContent = 'center';
        },

        showName: function () {
            this.name = true;
            this.onResize();
            this.$refs.outer.style.justifyContent = 'space-between';
        },

        onResize: function () {
            const width = window.innerWidth;
            if (width > 720) {
                this.nav = true;
                this.menu = false;
            }
            else {
                this.nav = false;
                this.menu = true;
            }
        }
    }
}
</script>

<style scoped>
.navBar {
    background-color: black;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
}

.name {
    padding-left: 1.5rem;
}

.name a {
    font-size: 2rem;
}

nav {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

nav a {
    margin-right: 3px;
    margin-left: 3px;
}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
</style>