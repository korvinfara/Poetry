<template>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
     
    >
      <swiper-slide>
        <a class="slider__item item-01 slider__item_active" href="#" style="">
                        <div class="banner">
                            <div class="banner-image">
                                <img src="@/assets/jpg/banner_gallery.jpg" >
                            </div>
                            <div class="center">
                                <div class="banner-text">
                                    <h2 class="title bold">Игорь Булгаков. Поэтические полотна</h2>
                                    <div class="text">
                                        Тематический цикл «Экология Сознания». Синтез философии, живописи и поэзии.
                                    </div>
                                    <div class="location">
                                        <img src="@/assets/svg/map_pointer.svg"/>
                                        <div>Галерея на «Мосфильме», г. Москва, ул. Мосфильмовская, д. 1, к. 3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
      </swiper-slide>
      <swiper-slide>
        <a class="slider__item item-01 slider__item_active" href="#" style="">
                        <div class="banner">
                            <div class="banner-image">
                                <img src="@/assets/jpg/banner_gallery.jpg" >
                            </div>
                            <div class="center">
                                <div class="banner-text">
                                    <h2 class="title bold">Игорь Булгаков. Поэтические полотна</h2>
                                    <div class="text">
                                        Тематический цикл «Экология Сознания». Синтез философии, живописи и поэзии.
                                    </div>
                                    <div class="location">
                                        <img src="@/assets/svg/map_pointer.svg"/>
                                        <div>Галерея на «Мосфильме», г. Москва, ул. Мосфильмовская, д. 1, к. 3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

      </swiper-slide>
      <swiper-slide>
        <div class="slider__item item-03 banner video" style="">
                        <div class="center">
                            <div class="banner-text">
                                <h2 class="title">Беседы о творчестве</h2>
                                <div class="text">
                                    «Каждый холст, он вводит меня в определённые состояния.
                                    Да, эти состояния не повторяются точно так же,
                                    как не повторяются и холсты»
                                </div>
                                <div class="buttons">
                                    <a class="button primary circle green" href="/support">
                                        <span>подробнее</span>
                                    </a>
                                </div>
                            </div>
                            <div class="banner-video">
                                <div class="preview">
                                    <img class="preview-image" src="@/assets/jpg/banner_video.jpg"/>
                                    <img class="preview-button" src="@/assets/svg/video_play.svg"/>
                                </div>
                                <iframe class="frame" src="https://www.youtube.com/embed/rnVRdcTpHw8?si=mSjkW4hqcUeiefC5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
      </swiper-slide>
    </swiper>

  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
    import 'swiper/css/navigation';
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
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
    };
  </script>