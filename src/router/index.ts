import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cv',
      component: () => import('@/views/cv-view/index.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test/index.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
