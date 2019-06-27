import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Beers from '@/views/Beers';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/beers',
      name: 'beers',
      component: Beers
    }
  ]
});

export default router;
