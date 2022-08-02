<template>
    <div class="flx">
        <div class="size">
            <p>
                Hello Everyone, my name is <b>Zikai Zhang</b>, born in China.
                I'm 23 years old and I'm a graduate student at Boston
                University. I like small animals very much, although I do not
                have a pet now, but I will keep a cat in the future. I like guns
                very much, but unfortunately China has very strict gun control.
                I'm going to share a video of me shooting a gun next.
            </p>
            <p>
                My favorite game is called Clash of clans.Clash of Clans is a
                2012 free-to-play mobile strategy video game developed and
                published by Finnish game developer Supercell.<br />
                The goal of the game is to grab and collect gold and elixir,
                using these resources to upgrade their own towns. We will have a
                lot of buildings with different levels to upgrade, and they will
                require different resources. I want to make a website can be
                very easy to query these resources.
            </p>
        </div>
        <div class="pic">
            <img
                src="..\assets\images\zikai.jpeg"
                alt="i am zikai"
                title="i am zikai"
                width="250"
            />
        </div>
    </div>
</template>

<style scoped>
.pic {
    text-align: center;

}

.size {
    width: 400px;

    justify-content:left;
    margin-right: 60px;
}

.flx {
    display: flex;
    justify-content: center;
    margin-block: 2rem;

    float: inline-end;
    width: 800px;
    text-align: center;
    margin: auto;
}
</style>
