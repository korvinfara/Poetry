<template>
    <div class="main">
        <div class="module book-slider">
            <div class="module-center">
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
import Slider from '../components/SliderBooks.vue'

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

</style>./BooksItemView.vue
