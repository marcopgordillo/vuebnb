import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import ListingPage from "./components/ListingPage/ListingPage.vue";
import HomePage from "./components/HomePage";
import SavedPage from "./components/SavedPage";
import LoginPage from './components/LoginPage';
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/saved', component: SavedPage, name: 'saved' },
    { path: '/login', component: LoginPage, name: 'login' },
    { path: '/listing/:listing', component: ListingPage, name: 'listing' }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  const serverData = JSON.parse(window.vuebnb_server_data);
  if (
    to.name === 'listing'
      ? store.getters.getListing(to.params.listing)
      : store.state.listing_summaries.length > 0
    || to.name === 'login'
  ) {
    next();
  }
  else if (!serverData.path || to.path !== serverData.path) {
    axios.get(`/api${to.path}`).then(({data}) => {
      store.commit('addData', {route: to.name, data});
      next();
    });

  }
  else {
    store.commit('addData', {route: to.name, data: serverData});
    next();
  }
});

export default router;
