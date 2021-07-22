import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProjects from '../views/AddProjects.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddProjects',
    component: AddProjects
  },
  {
    path: '/EditProject/:id',
    name: 'EditProject',
    component: EditProject,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
