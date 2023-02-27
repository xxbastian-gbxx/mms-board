import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import CompanyView from '../views/CompanyView.vue'
import SetupView from '../views/SetupView.vue'
import TasksView from '../views/TasksView.vue'
import AdminView from '../views/AdminView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/SetupView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TasksView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
