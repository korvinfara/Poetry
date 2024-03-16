/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => ({
    characters: [
      { name: 'wsws', age: '121212' },
      { name: '1112', age: '1dds' }
    ],
    searchName: null
  }),

  getters: {
    getAll: (state) => state.characters
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
