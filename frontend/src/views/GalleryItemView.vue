<template>
<div class="main">
            <div class="module gallery-slider">
                <div class="module-center">
                    <div class="module-nav">
                        <div class="link-more">
                            <img class="icon" src="@/assets/svg/back.svg"/>
                            <div class="text">Вся галерея</div>
                        </div>
                        <div class="module-title">
                            <h2 class="title">«Экология Сознания»</h2>
                            <div class="counter">
                                <span>{{ currIndex }}</span>/<span>10</span>
                            </div>
                        </div>
                        <a class="button primary green" href="">
                            <img class="icon" src="@/assets/svg/cart_w.svg"/>
                            <span class="text">купить</span>
                        </a>
                    </div>
                    <div class="module-content">
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper">
                               <Slider :currIndex="currIndex" @setCurrIndex="setCurrIndex" class="slider__items"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Slider from '../components/SliderGallery.vue'

export default { 
    name: 'GallaryItemView',
    components: {
        Slider
    },
    data(){
        return {
            currIndex: 1
        }
    },
    created(){
        console.log(this.$route.params.id);
        this.currIndex = this.$route.params.id
    },
    methods:{
        setCurrIndex(index){
            this.currIndex = index;
        }
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
