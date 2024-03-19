<template>
    <div class="main">
        <div class="module events-slider">
            <div class="module-center">
                <div class="module-nav">
                    <a class="link-more" href="/events">
                        <img class="icon" src="@/assets/svg/back.svg"/>
                        <div class="text">Все события</div>
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
import Slider from '../components/SliderEvents.vue'

export default { 
    name: 'EventsItemView',
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
