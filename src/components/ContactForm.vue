<template>
    <div class="contactForm">
        <div class="form">
            <h1>Contact Me</h1>
            <form>
                <div class="info">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        ref="name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        ref="email"
                        required
                    />
                </div>
                <div class="info">
                    <textarea
                        name="message"
                        placeholder="Message"
                        ref="message"
                        v-model="message"
                        maxlength="500"
                        required
                    ></textarea>
                </div>
                <div>
                    Word Limit: <span>{{ message.length }} / 500</span>
                </div>
                <div @click="submit" class="button">Send</div>
            </form>
        </div>
    </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { vModelCheckbox } from "vue";
import { db } from "../firebase/index";
export default {
    name: "ContactForm",
    data() {
        return {
            message: "",
        };
    },
    methods: {
        submit: async function () {
            const name = this.$refs.name.value;
            const email = this.$refs.email.value;
            const message = this.$refs.message.value;
            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields");
                return;
            }
            const data = {
                name: name,
                email: email,
                message: message,
            };
            await addDoc(collection(db, "contact"), data);
            this.$refs.name.value = "";
            this.$refs.email.value = "";
            this.$refs.message.value = "";
            alert("Successfully submit");
        },
    },
};
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

.info {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

input {
    width: 30vw;
    max-width: 300px;
    padding: 0.5rem;
}

input:focus {
    outline: none !important;
    border: 2px solid red;
    border-radius: 3px;
}

textarea {
    width: calc(60vw + 2.5rem);
    max-width: calc(600px + 2.5rem);
    padding: 0.5rem;
    height: 6rem;
    resize: none;
}

textarea:focus {
    outline: none !important;
    border: 2px solid red;
    border-radius: 3px;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.button {
    width: 8rem;
    padding: 1rem;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1.2rem;
    color: white;
    background-color: black;
}

.button:hover {
    cursor: pointer;
    color: red;
}
</style>
