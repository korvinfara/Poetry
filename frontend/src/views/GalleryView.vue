<template>

<div class="main">
    <div class="module paintings">
        <div v-for="gallery in data" :key="gallery.id" class="module-center">
            <h2 class="module-title">«{{gallery.name}}»</h2>
            <div class="module-text">
                <i>{{gallery.titel}}</i>
            </div>
            <div class="module-foreword">
                <div class="link-more">
                    <img class="icon intro" src="@/assets/svg/intro.svg"/>
                    <div class="text">Предисловие</div>
                    <img class="icon" src="@/assets/svg/more.svg"/>
                </div>
            </div>
            <div class="module-content">
                <div class="grid paintings page">
                    <div v-for="column in gallery.parts" :key="column"  class="column">

                        <router-link v-for="item in column" :key="item" class="item painting item-01" :to="`/gallery/`+ gallery.id +`/` + item.img">
                            <button class="painting-buy">
                                <img class="icon" src="@/assets/svg/cart_w.svg">
                            </button>
                            <div class="painting-image">
                                <img class="image" :src="`./files/gallery/` + item.img"  loading="lazy"/>
                            </div>
                            <div class="painting-text">
                                <div  class="align">
                                    <div v-html="item.poem"></div>
                                </div>
                            </div>
                        </router-link>
                    </div> 
                </div>
            </div>
            <div class="foreword gallery">
                <div class="shadow"></div>
                <div class="content">
                    <button class="close">
                        <img class="icon one" src="@/assets/svg/close_g.svg">
                        <img class="icon two" src="@/assets/svg/close_y.svg">
                    </button>
                    <div class="align">
                        <div class="title bold">
                            «{{gallery.name}}»
                        </div>
                        <div class="title">
                            Предисловие
                        </div>
                        <div class="text">
                            {{gallery.titel}}
                        </div>
                        <div class="text quote">
                            {{gallery.forfard}}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
import { useStore } from '../store/index'

export default {
    setup() {
        const userStore = useStore();
        return {
          userStore
        };
    },
    name: 'GallaryView',
    props: {
        msg: String
    },
    data () {
        return {
            data: this.userStore.getPartGallerys(),
          
         }
    },
    mounted(){
    
    const moduleForewords = document.querySelectorAll('.module-foreword')
    const forewords = document.querySelectorAll('.foreword')

    for (let i = 0; i < moduleForewords.length; i++) {
        const linkMore = moduleForewords[i].querySelector('.link-more')
        const foreword = forewords[i]
        const closeBtn = foreword.querySelector('.close')
        const shadow = foreword.querySelector('.shadow')

        linkMore.addEventListener('click', function (event) {
            event.preventDefault()
            foreword.classList.add('active')
            document.body.classList.add('overflow')
        })

        document.addEventListener('click', function (event) {
            const target = event.target
            if (!target.closest('.foreword') && !target.closest('.module-foreword')) {
            foreword.classList.remove('active')
            document.body.classList.remove('overflow')
            }
        })

        closeBtn.addEventListener('click', function (event) {
            foreword.classList.remove('active')
            document.body.classList.remove('overflow')
        })

        shadow.addEventListener('click', function (event) {
            foreword.classList.remove('active')
            document.body.classList.remove('overflow')
        })
    }
    const paintings = document.querySelectorAll('.item.painting')
    paintings.forEach(function (painting) {
        const align = painting.querySelector('.align')
        const divs = align.querySelectorAll('div')
        const totalHeight = Array.from(divs).reduce((acc, div) => acc + div.offsetHeight, 0)

        const animationDuration = divs.length * 1.5

        align.style.transitionDuration = animationDuration + 's'

        painting.addEventListener('mouseenter', function () {
            align.style.transform = 'translateY(-' + totalHeight + 'px)'

            divs.forEach(function (div) {
                const rect = div.getBoundingClientRect()
                const textRect = painting.querySelector('.painting-text').getBoundingClientRect()
                if (rect.top <= textRect.top) {
                    div.style.opacity = '1'
                }
            })
        })
        painting.addEventListener('mouseleave', function () {
            align.style.transform = 'none'
        })
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
