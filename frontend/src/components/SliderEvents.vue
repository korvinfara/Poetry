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
            <div class="slider__item item-01 slider__item_active" style="">
                <div class="event-status active">
                    <div class="title">
                        Игорь Булгаков. Поэтические полотна.
                    </div>
                    <div class="divider">/</div>
                    <div class="status active">сейчас</div>
                    <div class="status archive">в архиве</div>
                </div>
                <div class="item event active">
                    <div class="event-media">
                        <img class="image" src="@/assets/jpg/event_title_polotna.jpg"/>
                    </div>
                    <div class="event-text">
                        <div class="text">
                            Тематический цикл «Экология Сознания».
                            Синтез философии, живописи и поэзии.
                        </div>
                    </div>
                    <div class="event-info">
                        <div class="location">
                            <div class="icons">
                                <img class="image active" src="@/assets/svg/map_pointer_y.svg">
                                <img class="image archive" src="@/assets/svg/map_pointer_y.svg">
                            </div>
                            <div class="text">
                                <div class="row">Галерея на «Мосфильме»</div>
                                <div class="row">г. Москва, ул. Мосфильмовская, д. 1, к. 3</div>
                            </div>
                        </div>
                        <div class="date">
                            <div class="icons">
                                <img class="image" src="@/assets/svg/time_g.svg">
                            </div>
                            <div class="text">
                                <div class="row">Ежедневно, с 10:00 до 22:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-02" style="">
                <div class="event-status archive">
                    <div class="title">
                        В Музее современного искусства — премьера
                    </div>
                    <div class="divider">/</div>
                    <div class="status active">сейчас</div>
                    <div class="status archive">в архиве</div>
                </div>
                <div class="item event archive">
                    <div class="event-media">
                        <img class="image" src="@/assets/jpg/event_title_yaroslavl.jpg"/>
                    </div>
                    <div class="event-text">
                        <div class="text">
                            Впервые свои работы ярославцам представляет Игорь Булгаков.
                            Почти половину работ автор привёз в столицу Золотого кольца.
                        </div>
                    </div>
                    <div class="event-info">
                        <div class="location">
                            <div class="icons">
                                <img class="image active" src="@/assets/svg/map_pointer_y.svg">
                                <img class="image archive" src="@/assets/svg/map_pointer_y.svg">
                            </div>
                            <div class="text">
                                <div class="row">Мемориальный Дом-музей Л.В. Собинова</div>
                                <div class="row">г. Ярославль, ул. Собинова, 25</div>
                            </div>
                        </div>
                        <div class="date">
                            <div class="icons">
                                <img class="image" src="@/assets/svg/time_g.svg">
                            </div>
                            <div class="text">
                                <div class="row">
                                    17 — 19 декабря 2021 г., с 10:00 до 22:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item event content">
                    <div class="event-media">
                        <iframe class="frame"
                                src="https://www.youtube.com/embed/WfTwF_Z5b4A?si=O9J7dRFej0pO5MEL"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                    </div>
                    <div class="event-text">
                        <div class="text">В Доме муз — Музее современного искусства — премьера.
                            Впервые свои работы ярославцам представляет Игорь Булгаков. Почти
                            половину работ автор привёз в столицу Золотого кольца.
                        </div>
                        <div class="text">Каждая сопровождается поэтическими строчками. Главная тема
                            мастера — экология сознания.
                        </div>
                        <div class="text">Игорь Булгаков, доктор философии:</div>
                        <div class="text">«Лучом тончайшим ухожу в простор. В просторе я свободен от
                            проблем. В просторе я живу. Простор мой дом. Простор безмерен, как
                            безмерна вечность. Простор в понятии времени беспечность. И я беспечен,
                            я являюсь им».
                        </div>
                        <div class="text">Первые опыты уникального постижения мира обращены в книгу.
                            Эволюция творчества — картины и сопровождающие их стихи, а возможно
                            наоборот, сначала слово, потом — живые краски бытия. Безусловный синтез
                            образов.
                        </div>
                        <div class="text">Игорь Булгаков, доктор философии:</div>
                        <div class="text">«Сам по себе этот храм, будем называть так, с душой. Она
                            здесь присутствует. И рад тому, что мои холсты этот храм воспринял».
                        </div>
                        <div class="text">Небесный и солнечный, от зимнего рассвета до южной ночи —
                            такова палитра художника. Искусствоведы называют творчество Игоря
                            Булгакова серьёзным культурологическим явлением.
                        </div>
                        <div class="text">Елена Шахова, генеральный директор ИКК «Вятское» им. Е.А.
                            Анкудиновой:
                        </div>
                        <div class="text">«Эти работы, они наполнены любовью, и заставляют нас
                            задуматься о бытие, о подсознательном, о космической составляющей нашего
                            бытия, о бесконечности Вселенной. Мне кажется, это такое новогоднее
                            чудо, сказка, которая подарена Центром Современного искусства, будет
                            очень привлекательна. И мы приглашаем бесплатно до конца февраля».
                        </div>
                        <div class="text">Картины Игоря Булгакова приглашают не к созерцанию. В них
                            нужно погрузиться, улавливая в глубинах неясные тени, обрывки мыслей,
                            смутные образы. Энергоинформационные поля. Просторы Вселенной.
                        </div>
                        <div class="text">Марина Позднякова:</div>
                        <div class="text">«Безусловно, понимаешь и принимаешь сразу. Принимаешь
                            стих, принимаешь полотно. Кажется, что-то про тебя. Очень хорошо, что
                            такие работы, такие художники имеют возможность быть представлены
                            ярославской публике».
                        </div>
                        <div class="text">Художник экспонировал работы и в Звёздном городке, и в
                            Центре искусств на Покровке, во многих городах России. Сложился круг
                            людей, которым близки духовные искания философа. Умеющего видеть и
                            слышать, и передавать свои чувства другим.
                        </div>
                    </div>
                    <div class="event-photo event-02">
                        <img src="@/assets/jpg/photo_02.jpg"/>
                        <img src="@/assets/jpg/photo_03.jpg"/>
                        <img src="@/assets/jpg/photo_04.jpg"/>
                        <img src="@/assets/jpg/photo_05.jpg"/>
                        <img src="@/assets/jpg/photo_06.jpg"/>
                        <img src="@/assets/jpg/photo_07.jpg"/>
                        <img src="@/assets/jpg/photo_08.jpg"/>
                        <img src="@/assets/jpg/photo_09.jpg"/>
                        <img src="@/assets/jpg/photo_10.jpg"/>
                        <img src="@/assets/jpg/photo_11.jpg"/>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-03" style="">
                <div class="event-status archive">
                    <div class="title">
                        Валаам глазами братии
                    </div>
                    <div class="divider">/</div>
                    <div class="status active">сейчас</div>
                    <div class="status archive">в архиве</div>
                </div>
                <div class="item event archive">
                    <div class="event-media">
                        <img class="image" src="@/assets/jpg/event_title_valaam.jpg"/>
                    </div>
                    <div class="event-text">
                        <div class="text">
                            Фотографическая выставка была представлена посетителям Галерей под
                            открытым небом,
                            как на самом Валааме, так и в Москве, на Тверском бульваре
                            в Галерее Российского Фонда Мира
                        </div>
                    </div>
                    <div class="event-info">
                        <div class="location">
                            <div class="icons">
                                <img class="image active" src="@/assets/svg/map_pointer_y.svg">
                                <img class="image archive" src="@/assets/svg/map_pointer_y.svg">
                            </div>
                            <div class="text">
                                <div class="row">Российский Фонд Мира</div>
                                <div class="row">г. Москва, ул. Пречистенка, д. 10, строение 2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item event content">
                    <div class="event-text">
                        <div class="text">
                            В ходе общения с посетителями обнаружилось единство признания
                            чрезвычайной
                            своевременности данной выставки.
                        </div>
                        <div class="text">
                            Благодарность организаторам и устроителям выставки, формирующей в
                            обществе
                            условия для Духовно-нравственного возрождения.
                        </div>
                        <div class="text">
                            Единая и непререкаемая поддержка традиционных гуманитарных ценностей
                            нашей
                            огромной, в настоящий период сплочённой как никогда, страны.
                        </div>
                        <div class="text">
                            Единство мнения в вопросе популяризации традиционных морально-этических
                            норм
                            и Духовно- нравственного воспитания общества, в том числе посредством
                            охвата
                            большего количества регионов России для обустройства подобных Галерей
                            под
                            открытым небом, в том числе и в целях обеспечения всеобщей доступности.
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__item item-04" style="">
                <div class="event-status archive">
                    <div class="title">
                        Звездопад на каждый день
                    </div>
                    <div class="divider">/</div>
                    <div class="status active">сейчас</div>
                    <div class="status archive">в архиве</div>
                </div>
                <div class="item event archive">
                    <div class="event-media">
                        <img class="image" src="@/assets/jpg/event_title_zvezdopad.jpg"/>
                    </div>
                    <div class="event-text">
                        <div class="text">
                            Творческий вечер доктора философии, художника и поэта Игоря Булгакова,
                            посвящённый выходу в свет сборников поэтического цикла «Экология
                            сознания».
                        </div>
                    </div>
                    <div class="event-info">
                        <div class="location">
                            <div class="icons">
                                <img class="image active" src="@/assets/svg/map_pointer_y.svg">
                                <img class="image archive" src="@/assets/svg/map_pointer_y.svg">
                            </div>
                            <div class="text">
                                <div class="row">Центр современного искусства «Винзавод»</div>
                                <div class="row">г. Москва, 4-й Сыромятнический переулок, 1/8с6
                                </div>
                            </div>
                        </div>
                        <div class="date">
                            <div class="icons">
                                <img class="image" src="@/assets/svg/time_g.svg">
                            </div>
                            <div class="text">
                                <div class="row">11 сентября 2012 г.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item event content">
                    <div class="event-text">
                        <div class="text">
                            Новые стихотворные сборники Игоря Булгакова относится к лирической поэзии
                            ровно настолько, насколько требует принадлежность жанру, в который облечено
                            самобытное творчество автора - преимущественно философское,
                            мировоззренческое. Прикосновение к нему не сулит читателю легкого
                            развлечения, а ждет от него сосредоточенности и искренности. Доктор
                            философии Игорь Булгаков в другой своей ипостаси - художник-живописец. Для
                            воплощения изобразительных образов он берет краски и кисть. А слово
                            использует по его коренному и прямому назначению, неотрывному от смыслов.
                            Его произведения - способ философского познания глубин человеческой души,
                            причинно-следственных свойств: "...нет во Вселенной такого процесса, который
                            был бы замкнут внутри себя и тем самым не имел бы резонансных свойств, не
                            являлся бы в определенной степени формирующим иные, более сложные процессы".
                        </div>
                        <div class="text">
                            Ведущая<br/>
                            Заслуженный артист России, Заслуженный деятель искусств России<br/>
                            Галина Преображенская
                        </div>
                        <div class="text">
                            В программе вечера<br/>
                            - вернисаж живописных работ Игоря Булгакова<br/>
                            - презентация поэтических сборников Игоря Булгакова серии "Экология
                            сознания":<br/>
                            "В спираль закрученная мысль", "Знакомьтесь, это МЫ", "Директория Любви",
                            "Звездопад на каждый день"<br/>
                            - выступление искусствоведа Татьяны Строгановой
                        </div>
                        <div class="text">

                        </div>
                        <div class="text">

                        </div>
                        <div class="text">

                        </div>
                    </div>
                    <div class="event-photo event-04">
                        <img src="@/assets/jpg/event_01.jpg"/>
                        <img src="@/assets/jpg/event_02.jpg"/>
                        <img src="@/assets/jpg/event_03.jpg"/>
                        <img src="@/assets/jpg/event_04.jpg"/>
                        <img src="@/assets/jpg/event_05.jpg"/>
                        <img src="@/assets/jpg/event_06.jpg"/>
                    </div>
                </div>
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
                const index = e.activeIndex + 1
                this.$emit('setCurrIndex', index)
                this.$router.push({ name: 'events-item', params: { id: index }})             
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