<template>
    <swiper
    class="slider__items"
    :modules="modules"
    :slides-per-view="4"
    :space-between="5"
    :parallax="true"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
        <swiper-slide>
            <div class="slider__item item-01 slider__item_active" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>И смех и грех</div>
                        <div>Ты жизнь убил на то</div>
                        <div>Что вывел формулу</div>
                        <div>Что есть добро</div>
                        <div>Что зло</div>
                        <div>Причём понятья эти разделил</div>
                        <div>Чем очень сильно удивил</div>
                    </div>
                </a>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-02" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Мысль не видна</div>
                        <div>Но виден результат</div>
                        <div>Которому ты рад</div>
                        <div>Или не рад</div>
                    </div>
                </a>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-03" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Для каждого найдётся искушенье</div>
                        <div>Вопрос лишь в том</div>
                        <div>Готов ли к искупленью</div>
                    </div>
                </a>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-04" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Любовь</div>
                        <div>Это щедрый Божественный дар</div>
                        <div>Влюблённость</div>
                        <div>Пылающий страстью пожар</div>
                        <div>Любовь</div>
                        <div>Это то что даётся не всем</div>
                        <div>Влюблённость</div>
                        <div>Пожалуйста</div>
                        <div>С кучей проблем</div>
                    </div>
                </a>
            </div>       
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-05" style="">
                <a class="item poem item-05" href="/poems-item">
                    <div class="poem-text">
                        <div>Коль чувства только чистые в Душе</div>
                        <div>То ты не здесь ещё</div>
                        <div>Иль там уже</div>
                    </div>
                </a>
            </div>          
        </swiper-slide>
        <swiper-slide>
        <div class="slider__item item-06" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Огонь Души</div>
                        <div>Не подожжёт твой дом</div>
                        <div>Отсутствие Огня Души</div>
                        <div>Его остудит</div>
                        <div>Но дом холодный не пригоден для жилья</div>
                        <div>И вряд ли кто с тобой жить в этом доме будет</div>
                    </div>
                </a>
            </div>        
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-07" style="">
            <a class="item poem" href="/poems-item">
                <div class="poem-text">
                    <div>Ты дружбу променял на сто рублей</div>
                    <div>Оправдываясь тем что был голодный</div>
                    <div>А говорят</div>
                    <div>Грядущая зима</div>
                    <div>Пообещала быть весьма холодной</div>
                </div>
            </a>
        </div>          
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-08" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Что либо объяснить тому кто Вас не слышит</div>
                        <div>Сложно</div>
                        <div>Кто слушать не желает</div>
                        <div>Не возможно</div>
                    </div>
                </a>
            </div>           
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-09" style="">
                <a class="item poem item-09" href="/poems-item">
                    <div class="poem-text">
                        <div>Стараемся не видеть очевидное</div>
                        <div>Особенно когда оно обидное</div>
                        <div>Обидное увидеть нам обидно</div>
                        <div>Глупцы мы</div>
                        <div>Это очевидно</div>
                    </div>
                </a>
            </div>          
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-10" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Ты выше не продвинешься</div>
                        <div>Пока</div>
                        <div>Сознанье закрывают облака</div>
                        <div>Когда разгонишь облака с Сознанья</div>
                        <div>Тогда откроют Истинные Знанья</div>
                    </div>
                </a>
            </div>        
        </swiper-slide>
        <swiper-slide>    
            <div class="slider__item item-10" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Ты выше не продвинешься</div>
                        <div>Пока</div>
                        <div>Сознанье закрывают облака</div>
                        <div>Когда разгонишь облака с Сознанья</div>
                        <div>Тогда откроют Истинные Знанья</div>
                    </div>
                </a>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-11" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Никто из нас понятья не имеет</div>
                        <div>Что отдаёт за то</div>
                        <div>Чем в данный миг владеет</div>
                    </div>
                </a>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-12" style="">
                <a class="item poem" href="/poems-item">
                    <div class="poem-text">
                        <div>Картинки</div>
                        <div>Те что открывает зренье</div>
                        <div>Являют Суть</div>
                        <div>Коль есть прозренье</div>
                    </div>
                </a>
            </div>
        </swiper-slide>

    </swiper>
        <button @click="slidePrev" class="slider__btn slider__btn_prev" style="z-index: 1000;">
            <img class="icon one" src="@/assets/svg/prev_g.svg">
            <img class="icon two" src="@/assets/svg/prev_y.svg">
        </button>
        <button @click="slideNext" class="slider__btn slider__btn_next" style="z-index: 1000;">
            <img class="icon one" src="@/assets/svg/next_g.svg">
            <img class="icon two" src="@/assets/svg/next_y.svg">
           
        </button>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide, useSwiper, useSwiperSlide   } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
   
    
    export default {
  
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const swiperSlide = useSwiperSlide();
            const onSwiper = (swiper) => {
            };
            const onSlideChange = (e) => {
            };

        return {
          onSwiper,
          onSlideChange,
          modules: [ Navigation, Pagination, Scrollbar, A11y ],
          
        };
      },
        props: {
                id: String
            },
        data(){
            return{
                swiper: null
            }
        },
        created(){
            
        },
        mounted(){
            this.swiper = document.querySelector(".swiper").swiper;
            this.swiper.slideTo(this.$route.params.id - 1)
         
        },
        methods:{
            onSlideChange(e){
              //  const index = e.activeIndex + 1
               // this.$emit('setCurrIndex', index)
               // this.$router.push({ name: 'poems-item', params: { id: index }})             
            },
            slideNext(){
                this.swiper.slideNext()
            },
            slidePrev(){
                this.swiper.slidePrev()
            }
        }
    };
  </script>
  <style >
.swiper-button-next{
    top: 30%;
    color: #FFC200
}
.swiper-button-prev{
    top: 30%;
    color: #FFC200
    
}
</style>