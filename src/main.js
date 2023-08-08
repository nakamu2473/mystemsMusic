import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import LinkListComponent from "./pages/linkList.vue"
import HomeComponent from "./pages/home.vue"

const Home = { template: '<div>Home</div>' }
const LinkList = { template: '<div>LinkList</div>' }

const routes = [
  { path: '/', component: LinkListComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app")
