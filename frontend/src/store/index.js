import { defineStore } from 'pinia'
import { poems } from '@/store/data/poems'
import { collectionsPoems } from '@/store/data/collectionsPoems'
import { paintings } from '@/store/data/paintings'
import { gallery } from '@/store/data/gallery'
import { events } from '@/store/data/events'
import { books } from '@/store/data/books'

console.log(poems)

export const useStore = defineStore('counter', {
  state: () => ({
    poems: poems,
    collectionsPoems: collectionsPoems,
    paintings: paintings,
    gallery: gallery,
    events: events,
    books: books
  }),

  getters: {
    getEvents: (state) => state.events
  },

  actions: {
    getMultipleCharacters (from, to) {
      console.log('>>', from, to)
    },

    getCharacter (id) {
      console.log('>>', id)
    },

    getEpisode (id) {
      console.log('>>', id)
    }
  }
})
