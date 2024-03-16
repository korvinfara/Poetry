<template>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      navigation
    >
      <swiper-slide>
        <div class="slider__item painting item-01 slider__item_active" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Как много времени</div>
                  <div>По меркам человечьим</div>
                  <div>Прошло с тех пор</div>
                  <div>Когда впервые</div>
                  <div>Увидел горы золотые</div>
                  <div>Материки и океанов гладь</div>
                  <div>Увидел</div>
                  <div>В первозданном виде</div>
                  <div>Всё то</div>
                  <div>Что нынче не узнать</div>
                  <div>&nbsp;</div>
                  <div>И ты</div>
                  <div>Народ сегодняшней Планеты</div>
                  <div>Ты стал иной</div>
                  <div>В отличие от тех</div>
                  <div>Которые собою заселяли Планету эту</div>
                  <div>Я их помню всех</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_01.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" @click="bay" >
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-02" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Вдалеке</div>
                  <div>Как туман растворилось</div>
                  <div>Всё что было буквально вчера</div>
                  <div>Вместо прошлого зыбью явилась</div>
                  <div>Новизна предстоящего дня</div>
                  <div>&nbsp;</div>
                  <div>А часы</div>
                  <div>Отбивают ритмично</div>
                  <div>Пульс назад уплывающих лет</div>
                  <div>Совершавших обряды насилия</div>
                  <div>Надо всеми кого уже нет</div>
                  <div>&nbsp;</div>
                  <div>Вдалеке</div>
                  <div>Как туман растворится</div>
                  <div>Всё что будет сегодня и впредь</div>
                  <div>Нынче новое</div>
                  <div>Станет привычным</div>
                  <div>Со способностью быстро стареть</div>
                  <div>&nbsp;</div>
                  <div>Лишь часы</div>
                  <div>Как и прежде</div>
                  <div>Ритмично</div>
                  <div>Будут пульс отбивать прошлых лет</div>
                  <div>Совершая обряды насилия</div>
                  <div>Надо всеми кого пока нет</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_02.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-03" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Лучом тончайшим ухожу в простор</div>
                  <div>В просторе я свободен от проблем</div>
                  <div>В просторе я живу</div>
                  <div>Простор мой дом</div>
                  <div>В просторе я Люблю</div>
                  <div>Люблю вас всех</div>
                  <div>В просторе жизнь не ведает границ</div>
                  <div>Простор безмерен</div>
                  <div>Как безмерна Вечность</div>
                  <div>Простор</div>
                  <div>В понятьи времени</div>
                  <div>Беспечность</div>
                  <div>И я беспечен</div>
                  <div>Я являюсь им</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_03.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
      </div>
      <div class="slider__item painting item-04" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Прощённым ты настолько можешь быть</div>
                  <div>Насколько в состоянии простить</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_04.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-04" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Прощённым ты настолько можешь быть</div>
                  <div>Насколько в состоянии простить</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_04.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-05" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Ты хочешь знать что будет завтра</div>
                  <div>Скажу</div>
                  <div>Но прежде ты ответь</div>
                  <div>Что мой ответ в тебе изменит</div>
                  <div>Что в дне сегодняшнем отменит</div>
                  <div>Иль может привнесёт в него</div>
                  <div>Я жду ответа твоего</div>
                  <div>&nbsp;</div>
                  <div>Молчишь</div>
                  <div>Ты вижу испугался</div>
                  <div>Так я тебя не тороплю</div>
                  <div>Когда с собою разберёшься</div>
                  <div>Зови</div>
                  <div>Я вновь к тебе приду</div>
                  <div>Тогда быть может потолкуем</div>
                  <div>Поразмышляем что к чему</div>
                  <div>&nbsp;</div>
                  <div>Подумай</div>
                  <div>Хорошо подумай</div>
                  <div>Как знать что я тебе скажу</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_05.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
      </div>       
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-06" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Не грусти</div>
                  <div>Пройдёт и это</div>
                  <div>Отбушует</div>
                  <div>Отгремит</div>
                  <div>Капля нежного рассвета</div>
                  <div>Уверяю</div>
                  <div>Будет это</div>
                  <div>Растворит собой тревогу</div>
                  <div>Душу Светом исцелит</div>
                  <div>&nbsp;</div>
                  <div>Не грусти</div>
                  <div>Пройдёт и это</div>
                  <div>Отликует</div>
                  <div>Отблестит</div>
                  <div>Капля нового рассвета</div>
                  <div>Уверяю</div>
                  <div>Будет это</div>
                  <div>Дверь в иное отворит</div>
                  <div>&nbsp;</div>
                  <div>Не грусти</div>
                  <div>Пройдёт и это</div>
                  <div>Новым свойством</div>
                  <div>Новых дней</div>
                  <div>Каплей Вечного рассвета</div>
                  <div>Уверяю</div>
                  <div>Будет это</div>
                  <div>Сможешь видеть Мир людей</div>
                  <div>&nbsp;</div>
                  <div>Только знай</div>
                  <div>Пройдёт и это</div>
                  <div>И тогда увидишь вновь</div>
                  <div>Каплю нежного рассвета</div>
                  <div>Уверяю</div>
                  <div>Будет это</div>
                  <div>Что в тебе разбудит кровь</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_06.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
                                    </div>       
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-07" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Вышло время захлопнув дверь</div>
                  <div>Она ему не нужна теперь</div>
                  <div>И как ненужность закрыло окно</div>
                  <div>Ни к чему теперь и оно</div>
                  <div>Они были ему нужны</div>
                  <div>Много лет и до сей поры</div>
                  <div>А когда всё что было прошло</div>
                  <div>Вслед за прошлым и время ушло</div>
                  <div>Но я вижу в сегодняшних днях</div>
                  <div>Как плутает в его следах</div>
                  <div>Время то что пришло взамен</div>
                  <div>Непривычностью перемен</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_07.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
      </div>       
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-08" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Религий много</div>
                  <div>А Исток один</div>
                  <div>Един Исток с Момента и Вовеки</div>
                  <div>А мы живём не видя Высоты</div>
                  <div>Живём в бреду не поднимая веки</div>
                  <div>&nbsp;</div>
                  <div>Возможно ли кого-то обвинить</div>
                  <div>В том что понятие Единого Начала</div>
                  <div>Как Суть глубин познания себя</div>
                  <div>Отдали в руки тех</div>
                  <div>Кто изначально</div>
                  <div>В стремлении открыть природность дней</div>
                  <div>Даруя людям Знания Единства</div>
                  <div>Не в состояньи были углядеть незримость нашу</div>
                  <div>Сути Триединства</div>
                  <div>Что растащив понятья по углам</div>
                  <div>Соорудив из них себе оружье</div>
                  <div>Построил каждый для себя свой Храм</div>
                  <div>Крупицей знанья Смысла Вездесущья</div>
                  <div>Но я в свой час определил конец</div>
                  <div>Непониманья мною многих сутей</div>
                  <div>И он явил начальность для меня</div>
                  <div>Пути начальность</div>
                  <div>Между перепутий</div>
                  <div>Мой путь открыл мне многие слова</div>
                  <div>Что до того скрывали Коды Знаний</div>
                  <div>И Коды Знаний развернули для меня</div>
                  <div>Суть слитных Смыслов в Мире пониманий</div>
                  <div>&nbsp;</div>
                  <div>И вот слова творимые Душой</div>
                  <div>Всех вас в Души просторы приглашая</div>
                  <div>Являя Суть Целительства собой</div>
                  <div>Лекарства Суть</div>
                  <div>Болезни отгоняя</div>
                  <div>Бальзамом служат для глубоких ран</div>
                  <div>Нектаром ото всех недугов жизни</div>
                  <div>Надеждой</div>
                  <div>Верой</div>
                  <div>Знаньем исцелят</div>
                  <div>Ваш открывая путь к потоку мыслей</div>
                  <div>&nbsp;</div>
                  <div>И знайте</div>
                  <div>БОЛЬ ДЛЯ ВСЕХ ЛЮДЕЙ ЗЕМЛИ</div>
                  <div>ЕСТЬ ПОКАЗАТЕЛЬ СКОЛЬ БЕЗДУМНЫ МЫ</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_08.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
      </div>       
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-09" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>Когда мы спим</div>
                  <div>Не дремлют небеса</div>
                  <div>Когда мы молимся</div>
                  <div>Они тому внимают</div>
                  <div>Когда мы думаем</div>
                  <div>Они нам помогают</div>
                  <div>О чём мечтаем мы</div>
                  <div>То Небеса творят</div>
                  <div>&nbsp;</div>
                  <div>Кто может слышать</div>
                  <div>Тот услышит их</div>
                  <div>Кто может видеть</div>
                  <div>Тем они покажут</div>
                  <div>Желающему знать</div>
                  <div>Они расскажут</div>
                  <div>Кто горделив без меры</div>
                  <div>Тех накажут</div>
                  <div>Себя понять стремящимся</div>
                  <div>Подскажут</div>
                  <div>И знать дадут</div>
                  <div>Что помыслы рожденные Душой</div>
                  <div>Суть проявляют</div>
                  <div>Быть дают собой</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_09.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
              </div>
          </div>
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slider__item painting item-10" style="">
          <button class="painting-buy">
              <img class="icon" src="@/assets/svg/cart_w.svg">
          </button>
          <div class="painting-text">
              <div class="align">
                  <div>В меня не веря</div>
                  <div>Знаете меня</div>
                  <div>В меня не веря</div>
                  <div>Вы меня боитесь</div>
                  <div>В меня не веря</div>
                  <div>Просите меня</div>
                  <div>Не веря просите</div>
                  <div>При этом не стыдитесь</div>
                  <div>&nbsp;</div>
                  <div>Для вас для каждого наступит свой черёд</div>
                  <div>Переосмыслить многое придётся</div>
                  <div>&nbsp;</div>
                  <div>Теперь пиши</div>
                  <div>&nbsp;</div>
                  <div>Пусть надо мной смеётся тот</div>
                  <div>Кто без последствий для себя смеётся</div>
                  <div>&nbsp;</div>
                  <div>Но я таких покуда не встречал</div>
                  <div>&nbsp;</div>
                  <div>Продиктовав</div>
                  <div>ОН</div>
                  <div>замолчал</div>
              </div>
          </div>
          <div class="painting-image">
              <img class="image" src="@/assets/jpg/picture_10.jpg">
              <div class="painting-info">
                  <div class="info">
                      <div class="info-row">Картина № 234234234</div>
                      <div class="info-row">Холс, масло, 100х80. 2021</div>
                  </div>
                  <a class="button primary green" href="">
                      <img class="icon" src="@/assets/svg/cart_w.svg"/>
                      <span class="text">купить</span>
                  </a>
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
        const onSlideChange = (e) => {
          
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
      methods:{
        onSlideChange(e){
          console.log('slide change', e.activeIndex);
          this.$emit('currindex', e.activeIndex)
        }
      }
  
    };
  </script>