<template>
    <swiper
    class="slider__items"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :parallax="true"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
        <swiper-slide>
            <div class="slider__item item-01 item book slider__item_active" style="">
                <div class="book-title">Слова рожденные душой</div>
                <div class="book-image">
                    <img class="image" src="@/assets/jpg/book01---Слова-рождённые-душой_800.jpg"/>
                </div>
                <div class="book-buttons">
                    <a class="link-more" href="#">
                        <div class="text">Сборник онлайн</div>
                        <img class="icon" src="@/assets/svg/more.svg">
                    </a>
                    <a class="button primary green" href="">
                        <img class="icon" src="@/assets/svg/cart_w.svg"/>
                        <span class="text">купить PDF</span>
                    </a>
                </div>
                <div class="book-content">
                    <div class="text">
                        Данный сборник включил в себя малострочные стихотворные
                        формы, которые словно звёздочки из высоких небесных глубин падали на
                        белый лист бумаги рифмованной мыслью.
                    </div>
                    <div class="text">
                        Отсюда и название - «Звездопад на каждый день»
                    </div>
                    <div class="text">
                        Вселенная собой являет точку Объёма безграничных величин Сознанье наше
                        напоминает кочку В болоте неосознанных причин
                    </div>
                    <div class="text">
                        Желаю Вам Света и Чистоты!<br/>
                        И.Булгаков
                    </div>
                </div>
            </div>            
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-02 item book " style="">
                <div class="book-title">Поэтические полотна</div>
                <div class="book-image">
                    <img class="image" src="@/assets/jpg/book02---поэтические-полотна_800.jpg"/>
                </div>
                <div class="book-buttons">
                    <a class="link-more" href="#">
                        <div class="text">Сборник онлайн</div>
                        <img class="icon" src="@/assets/svg/more.svg">
                    </a>
                    <a class="button primary green" href="">
                        <img class="icon" src="@/assets/svg/cart_w.svg"/>
                        <span class="text">купить PDF</span>
                    </a>
                </div>
                <div class="book-content">
                    <div class="text">
                        Данный сборник включил в себя малострочные стихотворные
                        формы, которые словно звёздочки из высоких небесных глубин падали на
                        белый лист бумаги рифмованной мыслью.
                    </div>
                    <div class="text">
                        Отсюда и название - «Звездопад на каждый день»
                    </div>
                    <div class="text">
                        Вселенная собой являет точку Объёма безграничных величин Сознанье наше
                        напоминает кочку В болоте неосознанных причин
                    </div>
                    <div class="text">
                        Желаю Вам Света и Чистоты!<br/>
                        И.Булгаков
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-03 item book " style="">
                <div class="book-title">В спираль закрученная мысль</div>
                <div class="book-image">
                    <img class="image" src="@/assets/jpg/book03_В_спираль_закрученная_мысль_800.jpg"/>
                </div>
                <div class="book-buttons">
                    <a class="link-more" href="#">
                        <div class="text">Сборник онлайн</div>
                        <img class="icon" src="@/assets/svg/more.svg">
                    </a>
                    <a class="button primary green" href="">
                        <img class="icon" src="@/assets/svg/cart_w.svg"/>
                        <span class="text">купить PDF</span>
                    </a>
                </div>
                <div class="book-content">
                    <div class="text">
                        Будем учиться вспоминать. Будем учиться чувствовать. Будем учиться осознавать.
                        Будем учиться знать. Будем учиться думать и говорить. Будем учиться жить -
                    </div>
                    <div class="text quote">
                        <div>Жить иначе</div>
                        <div>Гармонию в Мире творя</div>
                        <div>Чисто жить</div>
                        <div>Ни кого ни за что не коря</div>
                        <div>В океане Любви</div>
                        <div>Раскрылив паруса</div>
                        <div>Плыть туда где наш дом</div>
                        <div>Где всемерна краса</div>
                    </div>
                    <div class="text">
                        С Любовью<br/>
                        И. Булгаков
                    </div>
                </div>
            </div>            
        </swiper-slide>
        <slider-swipe>
            <div class="slider__item item-04 item book " style="">
                <div class="book-title">Звездопад на каждый день</div>
                <div class="book-image">
                    <img class="image" src="@/assets/jpg/book04---Звездопад-на-каждый-день_800.jpg"/>
                </div>
                <div class="book-buttons">
                    <a class="link-more" href="#">
                        <div class="text">Сборник онлайн</div>
                        <img class="icon" src="@/assets/svg/more.svg">
                    </a>
                    <a class="button primary green" href="">
                        <img class="icon" src="@/assets/svg/cart_w.svg"/>
                        <span class="text">купить PDF</span>
                    </a>
                </div>
                <div class="book-content">
                    <div class="text">
                        Данный сборник включил в себя малострочные стихотворные формы,
                        которые словно звёздочки из высоких небесных глубин падали
                        на белый лист бумаги рифмованной мыслью.<br/>
                        Отсюда и название – «Звездопад на каждый день»
                    </div>
                    <div class="text quote">
                        <div>Вселенная собой являет точку</div>
                        <div>Объёма безграничных величин</div>
                        <div>Сознанье наше напоминает кочку</div>
                        <div>В болоте неосознанных причин</div>
                    </div>
                    <div class="text">
                        Желаю Вам Света и Чистоты!<br/>
                        И. Булгаков
                    </div>
                </div>
            </div>
        </slider-swipe>
        <slider-swipe>
            <div class="slider__item item-05 item book " style="">
                <div class="book-title">Директория любви</div>
                <div class="book-image">
                    <img class="image" src="@/assets/jpg/book05---Директория-любви_800.jpg"/>
                </div>
                <div class="book-buttons">
                    <a class="link-more" href="#">
                        <div class="text">Сборник онлайн</div>
                        <img class="icon" src="@/assets/svg/more.svg">
                    </a>
                    <a class="button primary green" href="">
                        <img class="icon" src="@/assets/svg/cart_w.svg"/>
                        <span class="text">купить PDF</span>
                    </a>
                </div>
                <div class="book-content">
                    <div class="text">
                        Тексты Игоря Яковлевича проникают в тайные движения души, раскрывают невыразимые чувства:
                        это попытка поэта и философа осмыслить место человека в структуре космоса.<br/>
                        Открывая его книги, читатель попадает в особое пространство, отступает суета повседневности.
                    </div>
                </div>
            </div>           
        </slider-swipe>
        <slider-swipe>
            <div class="slider__item item-06 item book " style="">
                <div class="book-title">Знакомьтесь, это мы</div>
                <div class="book-image">
                    <img class="image" src="@/assets/jpg/book06---Знакомьтесь-это-мы_800.jpg"/>
                </div>
                <div class="book-buttons">
                    <a class="link-more" href="#">
                        <div class="text">Сборник онлайн</div>
                        <img class="icon" src="@/assets/svg/more.svg">
                    </a>
                    <a class="button primary green" href="">
                        <img class="icon" src="@/assets/svg/cart_w.svg"/>
                        <span class="text">купить PDF</span>
                    </a>
                </div>
                <div class="book-content">
                    <div class="text">
                        Этой книгой я приглашаю читателей в увлекательное путешествие к самим себе. Для того
                        что бы оно было полезным, что бы знакомство с собой действительно состоялось, нужно определенным
                        образом к нему подготовиться. Я имею в виду, что необходимо быть предельно честными перед собой,
                        нужно набраться смелости для того, что бы смочь увидеть себя в каждом стихотворении.
                        А это очень не просто. Мы привыкли находить оправданья своим мыслям, словам, поступкам.
                        И если кого-то, в чем-то считаем виновным, так уж точно не себя.<br/>
                        Данная книга не предназначена для беглого чтения глазами, так как:
                    </div>
                    <div class="text quote">
                        <div>Не торопись читать глазами</div>
                        <div>Прочтя Душой</div>
                        <div>Отыщешь для себя</div>
                        <div>Что прежде знал</div>
                        <div>Но новизна звучаний</div>
                        <div>Откроет то</div>
                        <div>Что не предполагал</div>
                    </div>
                    <div class="text">
                        Читать Душой, это большой труд, ведь это чтение не на скорость.<br/>
                        Постарайтесь услышать то, что будет подсказывать Ваша Душа. Слушайте ЕЁ, чувствуйте ЕЁ.
                        И постарайтесь не перепутать голос Души с голосом Разума. Если удастся, то возможно уже
                        завтра, Вы обнаружите, что Мир изменился для Вас, как и Вы для него. И это позволит
                        осознать простую истину:
                    </div>
                    <div class="text quote">
                        <div>Мысль не видна</div>
                        <div>Но виден результат</div>
                        <div>Которому ты рад</div>
                        <div>Или не рад</div>
                    </div>
                    <div class="text">
                        Счастливого пути!
                        <br/>
                        И. Булгаков
                    </div>
                </div>
            </div>           
        </slider-swipe>
 
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
                const index = e.activeIndex + 1
                this.$emit('setCurrIndex', index)
                this.$router.push({ name: 'books-item', params: { id: index }})             
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