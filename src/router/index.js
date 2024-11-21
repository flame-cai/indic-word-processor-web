import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainView.vue'),
      children: [
        {
          path: '/',
          name: 'transliterator',
          component: () => import('../components/TransliteratorComponent.vue',)
        },
      ]
    },
  ],
})

export default router
