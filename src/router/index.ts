import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cv',
      component: () => import('@/views/CvView/index.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
