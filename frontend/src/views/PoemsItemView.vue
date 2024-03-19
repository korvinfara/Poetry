<template>
 
   <div class="main">
        <div class="module poem-slider">
            <div class="module-center">
                <div class="module-nav">
                    <a class="link-more" href="/poems-collection">
                        <img class="icon" src="@/assets/svg/back.svg"/>
                        <div class="text">Весь сборник</div>
                    </a>
                    <div class="module-title">
                        <h2 class="title">«Звездопад на каждый день»</h2>
                        <div class="counter">
                            <span>{{ currIndex }}</span>/<span>10</span>
                        </div>
                    </div>
                </div>
                <div class="module-content"> 
                    <div class="slider primary" data-slider="itc-slider" data-loop="false">
                        
                        <div class="slider__wrapper">
                           <Slider :currIndex="currIndex" @setCurrIndex="setCurrIndex" />
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from '../components/SliderPoems.vue'

export default {
    name: 'PoemsItemView',
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
