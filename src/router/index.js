import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding  from '../views/DataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/dataBindinginputtext',
    name: 'DataBindingInputText',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingInputText.vue')
  },
  {
    path: '/dataBindinginputnumber',
    name: 'DataBindingInputNumber',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingInputNumber.vue')
  },
  {
    path: '/dataBindingtextarea',
    name: 'DataBindingTextarea',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingTextarea.vue')
  },
  {
    path: '/dataBindingselect',
    name: 'DataBindingSelect',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingSelect.vue')
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingCheckbox.vue')
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingCheckbox2.vue')
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingRadio.vue')
  },
  {
    path: '/databindingattribute',
    name: 'DataBindingAttribute',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingAttribute.vue')
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingButton.vue')
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingClass.vue')
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingClass2.vue')
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingStyle.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
