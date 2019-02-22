import Vue from 'vue';
import Router from 'vue-router';
import Questionnaire from '@/pages/Questionnaire';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Questionnaire',
      component: Questionnaire,
    },
  ],
});
