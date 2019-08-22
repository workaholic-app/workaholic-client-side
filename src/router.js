import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DashboardView from './views/DashboardView.vue'
import TasksView from './views/TasksView.vue'
import HealthView from './views/HealthView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'dashboard',
          component: DashboardView
        },
        {
          path: 'tasks',
          component: TasksView
        },
        {
          path: 'health',
          component: HealthView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
