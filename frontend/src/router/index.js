import { createRouter, createWebHistory } from 'vue-router'
import VueScrollTo from "vue-scrollto";

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import PoemsView from '../views/PoemsView.vue'
import EventsView from '../views/EventsView.vue'
import EventsItemView from '../views/EventsItemView.vue'
import BooksView from '../views/BooksView.vue'
import BooksItemView from '../views/BooksItemView.vue'
import ContactsView from '../views/ContactsView.vue'
import CartView from '../views/CartView.vue'
import PoemsItemView from '../views/PoemsItemView.vue'
import PoemsCollectionView from '../views/PoemsCollectionView.vue'
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
    path: '/events-item/:id',
    name: 'events-item',
    component: EventsItemView
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView
  },
  {
    path: '/books-item/:id',
    name: 'books-item',
    component: BooksItemView
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
    path: '/poems-item/:id',
    name: 'poems-item',
    component: PoemsItemView
  },
  {
    path: '/poems-collection',
    name: 'poems-collection',
    component: PoemsCollectionView
  },
  {
    path: '/:gallery/:id',
    name: 'gallery-item',
    component: GalleryItemView
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      VueScrollTo.scrollTo("#app", 500, { offset: savedPosition.y });
      return savedPosition;
    } else {
      VueScrollTo.scrollTo("#app");
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes, linkExactActiveClass: "checked my"

})

export default router
