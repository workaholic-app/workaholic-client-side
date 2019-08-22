import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeView from './components/Home.vue'
import TasksModal from './views/TasksModal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'home',
          component: HomeView
        },
        {
          path: 'tasks',
          component: TasksModal
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
