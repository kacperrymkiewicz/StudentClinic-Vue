import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButton from "@/components/BaseButton.vue";
import HelloMessage from "@/components/HelloMessage.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseModal from "@/components/BaseModal.vue";
import BaseTable from "@/components/BaseTable.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";


const capitalizeMixin = {
    methods: {
        capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)
    }
}

createApp(App)
.use(store)
.use(router)
.mixin(capitalizeMixin)
.component('base-button', BaseButton)
.component('hello-message', HelloMessage)
.component('base-card', BaseCard)
.component('base-modal', BaseModal)
.component('base-table', BaseTable)
.component('breadcrumbs', Breadcrumbs)
.mount("#app");
