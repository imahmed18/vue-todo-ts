import Vue from "vue";
import { createApp } from "vue";
import { makeServer } from "./server";
import App from "./App.vue";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

makeServer();

createApp(App).mount("#app");
