<template>
    <Nav />
    <router-view />
    <Foot />
</template>

<script>
import Nav from "./components/Nav.vue";
import Foot from "./components/Foot.vue";

export default {
    name: "App",
    components: {
        Nav,
        Foot,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap");
body {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
    margin: 0px;
}

a {
    color: white;
    text-decoration: none;
    transition: ease-in-out 0.2s;
}

a:hover {
    color: red;
}
</style>
