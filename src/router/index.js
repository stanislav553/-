import { createRouter, createWebHistory } from 'vue-router';
import TheHome from '@/pages/TheHome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/:id',
      name: 'info',
      component: () => import('@/pages/InfoPage.vue')
    },
    {
      path: '/add',
      name: 'addSensor',
      component: () => import('@/pages/AddSensor.vue')
    }
  ]
});

export default router;
