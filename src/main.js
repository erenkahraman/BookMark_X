import { createApp } from 'vue'
import App from './App.vue'
import router from './router';


import appHeader from "@/components/shared/appHeader";
import "@/assets/style.css";
const app = createApp(App);
app.use(router);
app.component("appHeader",appHeader);
app.mount('#app')
