import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Education from '../views/Education.vue';
import Resume from '../views/Resume.vue';
import Contact from '../views/Contact.vue';
import Game from '../views/Game.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/education',
    name: 'education',
    component: Education
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
