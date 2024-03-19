/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import { defineStore } from 'pinia'
import { poems } from '@/store/data/poems'
import { collections } from '@/store/data/collections'

console.log(poems)

export const useStore = defineStore('counter', {
  state: () => ({
    allPoems: poems,
    searchName: null
  }),

  getters: {
    getAll: (state) => state.allPoems
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
