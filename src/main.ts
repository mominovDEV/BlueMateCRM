import { createApp } from "vue";
import "./assets/css/main.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'boxicons/css/boxicons.min.css';
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(createPinia());

app.mount("#app");
