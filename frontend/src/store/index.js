import { defineStore } from 'pinia'
import { poems } from '@/store/data/poems'
import { collectionsPoems } from '@/store/data/collectionsPoems'
import { paintings } from '@/store/data/paintings'
import { gallerys } from '@/store/data/gallerys'
import { events } from '@/store/data/events'
import { books } from '@/store/data/books'

export const useStore = defineStore('counter', {
  state: () => ({
    poems: poems,
    collectionsPoems: collectionsPoems,
    paintings: paintings,
    gallerys: gallerys,
    events: events,
    books: books
  }),

  getters: {
    getEvents: (state) => state.events,
    getBooks: (state) => state.books,
  },

  actions: {
    getPartGallerys(){
      let arr = []
      this.gallerys.forEach(item=>{
        let curGallery = this.getPartGallery(item.id)
        arr.push(curGallery) 
      })
      return arr
    },
    getPartGallery(id) {
      let curGallery = this.gallerys.find(item=>item.id == id)
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      let total = curGallery.paintings.length;
      console.log(total)
      let delta = Math.trunc(total / 3) - 1;
      let index1 = 0;
      let count1 = (index1 + delta);
      let index2 = count1 + 1;
      let count2 = (index2 + delta);
      let index3 = count2 + 1;
      let count3 = total - 1;

      for(let i = index1; i <= count1; i++){
        let pic = this.paintings.find(elem=>elem.img == curGallery.paintings[i])
        arr1.push(pic)
      }
      for(let i = index2; i <= count2; i++){
        let pic = this.paintings.find(elem=>elem.img == curGallery.paintings[i])
        arr2.push(pic)
      }
      for(let i = index3; i <= count3; i++){
        let pic = this.paintings.find(elem=>elem.img == curGallery.paintings[i])
        arr3.push(pic)
      }
      console.log(arr1[0])
      console.log(arr2)
      console.log(arr3)

      curGallery.parts = [ arr1, arr2, arr3 ]
        
      return  curGallery
    },
    getAllGallerys(){
      let arr = []
      this.gallerys.forEach(item=>{
        let curGallery = this.getGallery(item.id)
        arr.push(curGallery) 
      })
      return arr
    },
    getGallery(id) {
      let curGallery = this.gallerys.find(item=>item.id == id)
      let arr = [];
      curGallery.paintings.forEach(item=>{
        let pic = this.paintings.find(elem=>elem.img == item)
        arr.push(pic)
      })
      curGallery.fullPaints = arr
      return  curGallery
    },
    getAllCollections(){
      let arr = []
      this.collectionsPoems.forEach(item=>{
        let curCollection = this.getCollection(item.id)
        arr.push(curCollection) 
      })
      return arr
    },
    getCollection(id) {
      console.log(id)
      let curCollection = this.collectionsPoems.find(item=>item.id == id)
      let arr = [];
      console.log(curCollection)
      curCollection.poems.forEach(item=>{
        let allPoems = this.poems.find(elem=>elem.name == item)
        arr.push(allPoems)
      })
      curCollection.allPoems = arr
      return  curCollection
    }
  }
})
