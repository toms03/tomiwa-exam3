import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '../components/Organs/NotFound.vue'
import HomeView from '../views/HomeView.vue';
import Repo from '../views/RepoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repo',
      name: 'RepoList',
      component: HomeView
    },
    { path: '/repo/:repoId', name: 'repo', component: Repo, props: true },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
