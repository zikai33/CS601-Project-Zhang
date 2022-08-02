<template>
    <div class="contactForm">
        <div class="form">
            <h1>Contact Me</h1>
            <div class="type">
                <button @click="hideEmail">Leave a Comment</button>
                <button @click="showEmail">Get in Touch</button>
            </div>
            <form action="" method="POST">
                <div class="info">
                    <input type="text" name="name" placeholder="Name" required>
                    <input v-if="email" type="email" name="email" placeholder="Email" required>
                </div>
                <div class="info">
                    <textarea name="message" placeholder="Message" required></textarea>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            email: true
        }
    },
    methods: {
        showEmail: function () {
            this.email = true;
        },
        hideEmail: function () {
            this.email = false;
        }
    }
}
</script>

<style>
.contactForm {
    width: 80vw;
    max-width: 720px;
    height: auto;
}

.form {
    width: 100%;
    height: auto;
}

button {
    padding-left: 1rem;
    padding-right: 1rem;
    min-width: 10rem;
    background-color: white;
}
</style>