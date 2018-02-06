import Vue from 'vue'
import Router from 'vue-router'

// Components
import navigation from '@/components/navigation'
import homeProjects from '@/components/homeProjects'

// Pages
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

// Projects
import customerMopa from '@/projects/customerMopa'

Vue.component('navigation', navigation)
Vue.component('homeProjects', homeProjects)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/projects/customer-mopa',
      name: 'customerMopa',
      component: customerMopa
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
