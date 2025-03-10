import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index.js";
import './axios.js';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import BaseButton from "@/components/BaseButton.vue";
import HelloMessage from "@/components/HelloMessage.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseModal from "@/components/BaseModal.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

const capitalizeMixin = {
    methods: {
        capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)
    }
}

const options = {
    transition: "Vue-Toastification__slideBlurred",
    maxToasts: 3, 
    timeout: 2500,
    position: "bottom-right"
};

createApp(App)
.use(store)
.use(router)
.use(Toast, options)
.mixin(capitalizeMixin)
.component('base-button', BaseButton)
.component('hello-message', HelloMessage)
.component('base-card', BaseCard)
.component('base-modal', BaseModal)
.component('breadcrumbs', Breadcrumbs)
.mount("#app");
