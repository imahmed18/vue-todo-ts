import Vue from "vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { makeServer } from "./server";
import App from "./App.vue";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

makeServer();

const pinia = createPinia();
createApp(App).use(pinia).mount("#app");
