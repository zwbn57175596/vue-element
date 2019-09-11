import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/element.js";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// import views
import App from "./App.vue";
import App2 from "./pages/App2.vue";

Vue.config.productionTip = false;
Vue.use(ElementUi);

const routes = [{ path: "/app2", component: App2 }];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
