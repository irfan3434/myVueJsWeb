import { createRouter, createWebHistory } from 'vue-router';

// Import your components (for now, we have only Home)

import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
