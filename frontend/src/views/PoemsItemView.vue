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
                        <h2 class="title">«{{collection.name}}»</h2>
                        <div class="counter">
                            <span>{{ currIndex }}</span>/<span>{{collection.allPoems.length}}</span>
                        </div>
                    </div>
                </div>
                <div class="module-content"> 
                    <div class="slider primary" data-slider="itc-slider" data-loop="false">
                        
                        <div class="slider__wrapper">
                            <SliderPoemsItem 
                                :poems="collection.allPoems" 
                                :currIndex="currIndex" 
                                @setCurrIndex="setCurrIndex"
                                :collectionId="collection.id"
                            />
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SliderPoemsItem from '../components/poems/SliderPoemsItem.vue'
import { useStore } from '../store/index'

export default {
    setup () {
        const userStore = useStore()
        return { userStore }
    },
    name: 'PoemsItemView',
    components: {
        SliderPoemsItem
    },
    data(){
        return {
           currIndex: 1,
           collection: null
        }
    },
    created(){
        console.log(this.$route.params.id);
        console.log(this.$route.params.collection);
        this.collection = this.userStore.getCollection(this.$route.params.collection)
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
