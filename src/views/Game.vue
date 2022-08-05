<template>
    <CariyselVue />
    <div class="center">
        <div class="green">Name</div>
        <div class="green">Maxlevel</div>
        <div class="green">Damage</div>
        <div class="green">Ability</div>
    </div>
    <div v-for="p in post" :key="p.id" class="center">
        <div class="green">{{ p.Name }}</div>
        <div class="green">{{ p.Maxlevel }}</div>
        <div class="green">{{ p.Damage }}</div>
        <div class="green">{{ p.Hitpoints }}</div>
    </div>
</template>

<script>
import CariyselVue from "@/components/Cariysel.vue";
export default {
    name: "Cariyel",
    components: {
        CariyselVue,
    },
    data() {
        return {
            post: [],
        };
    },
    methods: {
        getPosts() {
            fetch("http://ptsv2.com/t/zikaicoc/post")
                .then((response) => response.json())
                .then((data) => (this.post = data));
        },
    },
    mounted() {
        this.getPosts();
    },
};
</script>
<style scoped>
.center {
    text-align: center;
    margin: auto;
    display: flex;
    width: 800px;
}
.green {
    text-align: center;
    margin: auto;
    width: 300px;
}
</style>
