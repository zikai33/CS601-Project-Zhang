<template>
    <div>
        <div class="background">
            <img src="..\assets\images\backgroundpic.jpg" alt="zikai">
        </div>
        <div class="front">
            <h1>你好！</h1>
            <p>This is Zikai Zhang's homePage</p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.background {
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    position: absolute;
}
.front {
    z-index: 1;
    position: absolute;
    color: rgb(12, 71, 25);
    width: 1000px;
}
</style>