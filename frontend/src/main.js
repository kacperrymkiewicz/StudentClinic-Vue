import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButton from "@/components/BaseButton.vue";
import HelloMessage from "@/components/HelloMessage.vue";
import BaseCard from "@/components/BaseCard.vue";

createApp(App)
.use(store)
.use(router)
.component('base-button', BaseButton)
.component('hello-message', HelloMessage)
.component('base-card', BaseCard)
.mount("#app");
