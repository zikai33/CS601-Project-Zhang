<template>
    <footer>
        <div class="text" @click="gitHubClick">
            <a>My GitHub</a>
        </div>
        <div class="text" @click="twitterClick">
            <a>My Twitter</a>
        </div>
        <div class="text" @click="linkedInClick">
            <a>My LinkedIn</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Foot",
    methods: {
        gitHubClick: function () {
            window.location.href = "https://github.com/zikai33";
        },
        twitterClick: function () {},
        linkedInClick: function () {},
    },
};
</script>

<style scoped>
footer {
    background-color: black;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: fixed;
    bottom: 0;
}

.text {
    color: white;
    padding: 0.5rem 1rem;
    transition: ease-in-out 200ms;
}

.text:hover {
    cursor: pointer;
    transform: translateY(-3px);
}
</style>
