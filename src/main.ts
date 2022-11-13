import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus, { vLoading } from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "./assets/main.css";
import { toLine } from "./utils";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon${toLine(key)}`, component);
}

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
