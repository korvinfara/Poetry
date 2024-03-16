import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import PoemsView from '../views/PoemsView.vue'
import EventsView from '../views/EventsView.vue'
import BooksView from '../views/BooksView.vue'
import ContactsView from '../views/ContactsView.vue'
import CartView from '../views/CartView.vue'
import PoemsItemView from '../views/PoemsItemView.vue'
import GalleryItemView from '../views/GalleryItemView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/poems',
    name: 'poems',
    component: PoemsView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/poems-item',
    name: 'poems-item',
    component: PoemsItemView
  },
  {
    path: '/gallery-item',
    name: 'gallery-item',
    component: GalleryItemView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
