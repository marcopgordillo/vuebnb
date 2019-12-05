import Vue from 'vue';
import VueRouter from 'vue-router';
import ListingPage from "./components/ListingPage/ListingPage.vue";
import HomePage from "./components/HomePage";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/listing/:listing', component: ListingPage, name: 'listing' }
  ]
});
