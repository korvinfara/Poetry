<template>
    <div class="slider primary index" data-slider="itc-slider" data-loop="true">
            <router-link class="slider__wrapper" to="/events">
                <Slider class="slider__items"/>
                <button class="slider__btn slider__btn_prev">
                    <img src="@/assets/svg/prev_y.svg">
                </button>
                <button class="slider__btn slider__btn_next">
                    <img src="@/assets/svg/next_y.svg">
                </button>
                <ol class="slider__indicators">
                    <li class="slider__indicator slider__indicator_active" data-slide-to="0"></li>
                    <li class="slider__indicator" data-slide-to="1"></li>
                    <li class="slider__indicator" data-slide-to="2"></li>
                </ol>
            </router-link>
        </div>
        <div class="main">
            <div class="module paintings">
                <div class="module-center">
                    <h2 class="module-title">«{{gallery.name}}»</h2>
                    <div class="module-text">
                        <i>{{gallery.titel}}</i>
                    </div>                
                    <div class="module-content">
                        <div class="grid paintings">
                            <div v-for="column in gallery.parts" :key="column"  class="column">
                                <router-link v-for="item in column" :key="item" class="item painting item-01" :to="`/`+ gallery.id +`/` + item.img">
                                    <div class="painting-image">
                                        <img class="image" :src="`./files/gallery/` + item.img"  loading="lazy"/>
                                    </div>
                                    <div class="painting-text">
                                        <div  class="align">
                                            <div v-html="item.poem"></div>
                                        </div>
                                    </div>
                                </router-link>
                            </div> 
                        </div>
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper gallery">
                                <SliderMob :data = "galleryMob.fullPaints" :galleryId="gallery.id" class="gallery"/>
                            </div>
                        </div>
                    </div>
                    <div class="module-more">
                        <router-link class="link-more" :to="`/`+ gallery.id +`/` + gallery.paintings[0]">
                            <div class="text">Вся галерея</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="module texts">
                <div class="module-center">
                    <h2 class="module-title">«{{collection.name}}»</h2>
                    <div class="module-text">
                        <i>
                            {{ collection.titel }}
                        </i>
                    </div>
                    <div class="module-content">
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper collection ">
                                <SliderPoemsHome :data="collection.allPoems" class="slider__items grid texts" />
                            </div>
                        </div>
                    </div>
                    <div class="module-more">
                        <router-link class="link-more" :to="`/`+ collection.id +`/` + collection.allPoems[0].id">
                            <div class="text">Весь сборник</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="module poems">
               
                <div class="module-center">
                    <h2 class="module-title">И так далее...</h2>
                    <div class="module-text">
                        <i>Поэтические тексты Игоря Булгакова из разных сборников</i>
                    </div>
                    <div class="module-content">
                        <div class="grid poems">
                            <div class="column">
                                <router-link class="item poem poem-01" :to="`/` + poems[0].collection.id + `/`+ poems[0].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[0].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" href="#">
                                            <div class="text">{{poems[0].collection.name}}</div>
                                            <img class="icon" src="@/assets/svg/more.svg"/>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="column">
                                <router-link class="item poem poem-02" :to="`/` + poems[1].collection.id + `/`+ poems[1].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[1].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" href="#">
                                            <div class="text">{{poems[1].collection.name}}</div>
                                            <img class="icon" src="@/assets/svg/more.svg"/>
                                        </div>
                                    </div>
                                </router-link>
                                <router-link class="item poem poem-02" :to="`/` + poems[2].collection.id + `/`+ poems[2].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[2].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" href="#">
                                            <div class="text">{{poems[2].collection.name}}</div>
                                            <img class="icon" src="@/assets/svg/more.svg"/>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="column">
                                <router-link class="item poem poem-03" :to="`/` + poems[3].collection.id + `/`+ poems[3].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[3].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" href="#">
                                            <div class="text">{{poems[3].collection.name}}</div>
                                            <img class="icon" src="@/assets/svg/more.svg"/>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper">
                                <div class="slider__items grid poems collection" style="">
                                    <div class="slider__item poem item-01 slider__item_active" style="">
                                        <router-link class="item poem poem-01" to="#">
                                            <div class="poem-text">
                                                <div>Из ветра я себе построил дом</div>
                                                <div>Есть пол и стены в доме том</div>
                                                <div>Есть потолок и небольшой балкон</div>
                                                <div>Обои в доме небосводу в тон</div>
                                                <div>Есть лестница и выход на чердак</div>
                                                <div>Вполне приличный дом</div>
                                                <div>Но вот беда</div>
                                                <div>Сквозняк</div>
                                                <div>&nbsp;</div>
                                                <div>Решил проконопатить дом туманом</div>
                                                <div>Не вышло ничего</div>
                                                <div>Туман был рваным</div>
                                                <div>Пытался щели залатать водой</div>
                                                <div>Не получилось</div>
                                                <div>Дождик был грибной</div>
                                                <div>Старался в трещину приладить солнца луч</div>
                                                <div>Тот спрятался за стаей плотных туч</div>
                                                <div>Пока перебирал ремонтный материал</div>
                                                <div>И ветер стих</div>
                                                <div>И дом пропал</div>
                                                <div>&nbsp;</div>
                                                <div>С тех пор живу в дожде</div>
                                                <div>Когда есть дождь</div>
                                                <div>Живу в тумане</div>
                                                <div>Что окутал поле</div>
                                                <div>И в солнечном луче живу</div>
                                                <div>Живу во всём живущем в море</div>
                                                <div>Живу в заре и в звёздной тишине</div>
                                                <div>Живу во всём что землю окружает</div>
                                                <div>И лучшего не нужно дома мне</div>
                                                <div>Да кстати</div>
                                                <div>Лучшего и не бывает</div>
                                            </div>
                                            <div class="poem-link">
                                                <div class="link-more" href="#">
                                                    <div class="text">В спираль закрученная мысль</div>
                                                    <img class="icon" src="@/assets/svg/more.svg"/>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="slider__item poem item-02" style="">
                                        <router-link class="item poem poem-02" to="#">
                                            <div class="poem-text">
                                                <div>Уключина скрипит</div>
                                                <div>Весло вихляет</div>
                                                <div>Сочится через дно вода</div>
                                                <div>А я гребу того не замечая</div>
                                                <div>Гребу я в будущее из вчера</div>
                                                <div>Гребу сегодня</div>
                                                <div>Что есть только мочи</div>
                                                <div>Гребу упорно</div>
                                                <div>Мне хватает сил</div>
                                                <div>А за бортом в ночи луна хохочет</div>
                                                <div>Которую я чуть ни задавил</div>
                                                <div>По звёздам Мирового Океана</div>
                                                <div>Я бью веслом</div>
                                                <div>Взрывая гладь воды</div>
                                                <div>Мне б протрезветь</div>
                                                <div>А я босой и пьяный</div>
                                                <div>От счастья абсолютной красоты</div>
                                            </div>
                                            <div class="poem-link">
                                                <div class="link-more" href="#">
                                                    <div class="text">Директория любви</div>
                                                    <img class="icon" src="@/assets/svg/more.svg"/>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="slider__item poem item-03" style="">
                                        <router-link class="item poem poem-02" to="#">
                                            <div class="poem-text">
                                                <div>Уключина скрипит</div>
                                                <div>Весло вихляет</div>
                                                <div>Сочится через дно вода</div>
                                                <div>А я гребу того не замечая</div>
                                                <div>Гребу я в будущее из вчера</div>
                                                <div>Гребу сегодня</div>
                                                <div>Что есть только мочи</div>
                                                <div>Гребу упорно</div>
                                                <div>Мне хватает сил</div>
                                                <div>А за бортом в ночи луна хохочет</div>
                                                <div>Которую я чуть ни задавил</div>
                                                <div>По звёздам Мирового Океана</div>
                                                <div>Я бью веслом</div>
                                                <div>Взрывая гладь воды</div>
                                                <div>Мне б протрезветь</div>
                                                <div>А я босой и пьяный</div>
                                                <div>От счастья абсолютной красоты</div>
                                            </div>
                                            <div class="poem-link">
                                                <div class="link-more" href="#">
                                                    <div class="text">Директория любви</div>
                                                    <img class="icon" src="@/assets/svg/more.svg"/>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="slider__item poem item-04" style="">
                                        <router-link class="item poem poem-03" to="#">
                                            <div class="poem-text">
                                                <div>Не совпадают наши планы</div>
                                                <div>С тем</div>
                                                <div>Что нам уготовил Бог</div>
                                                <div>И мы зализывая раны</div>
                                                <div>Что следствием явились драмы</div>
                                                <div>Из-под бровей глядим на храмы</div>
                                                <div>И вопрошаем</div>
                                                <div>Как ТЫ мог</div>
                                                <div>&nbsp;</div>
                                                <div>Непонимание процесса</div>
                                                <div>Неосмысленье сути дня</div>
                                                <div>В нас зарождают возмущенье</div>
                                                <div>И боль обиды за себя</div>
                                                <div>&nbsp;</div>
                                                <div>Лишь крайне редко удаётся</div>
                                                <div>Увидеть истинность причин</div>
                                                <div>Ввиду которых мы имеем</div>
                                                <div>Совсем не то что мы хотим</div>
                                                <div>&nbsp;</div>
                                                <div>Лишь крайне редко удаётся</div>
                                                <div>Понять желаний пустоту</div>
                                                <div>Сравнив их с тем что нам даётся</div>
                                                <div>Точней сказать</div>
                                                <div>Что воздаётся</div>
                                                <div>За нашу слепоглухоту</div>

                                            </div>
                                            <div class="poem-link">
                                                <div class="link-more" href="#">
                                                    <div class="text">Знакомьтесь, это мы</div>
                                                    <img class="icon" src="@/assets/svg/more.svg"/>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                                <button class="slider__btn slider__btn_prev">
                                    <img class="icon one" src="@/assets/svg/prev_g.svg">
                                    <img class="icon two" src="@/assets/svg/prev_y.svg">
                                </button>
                                <button class="slider__btn slider__btn_next">
                                    <img class="icon one" src="@/assets/svg/next_g.svg">
                                    <img class="icon two" src="@/assets/svg/next_y.svg">
                                </button>
                                <ol class="slider__indicators">
                                    <li class="slider__indicator slider__indicator_active" data-slide-to="0"></li>
                                    <li class="slider__indicator " data-slide-to="1"></li>
                                    <li class="slider__indicator" data-slide-to="2"></li>
                                    <li class="slider__indicator" data-slide-to="3"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="module-more">
                        <router-link class="link-more" to="/poems">
                            <div class="text">Все сборники</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="module books">
                <div class="module-center">
                    <h2 class="module-title">Книги</h2>
                    <div class="module-content">
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper">
                                <div class="slider__items grid books" style="">
                                    <div class="slider__item item-01 slider__item_active" style="">
                                        <router-link class="item book" to="#">
                                            <img class="book-image" src="@/assets/jpg/book01---Слова-рождённые-душой_800.jpg"/>
                                        </router-link>
                                    </div>
                                    <div class="slider__item item-02" style="">
                                        <router-link class="item book" to="#">
                                            <img class="book-image" src="@/assets/jpg/book02---поэтические-полотна_800.jpg"/>
                                        </router-link>
                                    </div>
                                    <div class="slider__item item-03" to="">
                                        <router-link class="item book" to="#">
                                            <img class="book-image" src="@/assets/jpg/book03_В_спираль_закрученная_мысль_800.jpg"/>
                                        </router-link>
                                    </div>
                                    <div class="slider__item item-04" style="">
                                        <router-link class="item book" to="#">
                                            <img class="book-image" src="@/assets/jpg/book04---Звездопад-на-каждый-день_800.jpg"/>
                                        </router-link>
                                    </div>
                                    <div class="slider__item item-04" style="">
                                        <router-link class="item book" to="#">
                                            <img class="book-image" src="@/assets/jpg/book05---Директория-любви_800.jpg"/>
                                        </router-link>
                                    </div>
                                    <div class="slider__item item-04" style="">
                                        <router-link class="item book" to="#">
                                            <img class="book-image" src="@/assets/jpg/book06---Знакомьтесь-это-мы_800.jpg"/>
                                        </router-link>
                                    </div>
                                </div>
                                <button class="slider__btn slider__btn_prev">
                                    <img class="icon one" src="@/assets/svg/prev_g.svg">
                                    <img class="icon two" src="@/assets/svg/prev_y.svg">
                                </button>
                                <button class="slider__btn slider__btn_next">
                                    <img class="icon one" src="@/assets/svg/next_g.svg">
                                    <img class="icon two" src="@/assets/svg/next_y.svg">
                                </button>
                                <ol class="slider__indicators">
                                    <li class="slider__indicator slider__indicator_active" data-slide-to="0"></li>
                                    <li class="slider__indicator " data-slide-to="1"></li>
                                    <li class="slider__indicator" data-slide-to="2"></li>
                                    <li class="slider__indicator" data-slide-to="3"></li>
                                    <li class="slider__indicator" data-slide-to="4"></li>
                                    <li class="slider__indicator" data-slide-to="5"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="module-more">
                        <router-link class="link-more" to="/gallery">
                            <div class="text">Вся галерея</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        
</template>

<script>
import { useStore } from '../store/index'
import Slider from '../components/SliderBanner.vue'
import SliderMob from '../components/SliderMobile.vue'
import SliderPoemsHome from '../components/SliderPoemsHome.vue'

export default {
  setup () {
    const userStore = useStore()
    return { userStore }
  },
  components: {
    Slider, 
    SliderMob,
    SliderPoemsHome
  },
  name: 'HomeView',
  props: {
    msg: String
  },
  data () {
    return {
        gallery: this.userStore.getPartGallerys()[0],
        galleryMob: this.userStore.getAllGallerys()[0],
        collection: this.userStore.getPartCollections(),
        poems: this.userStore.getPartPoems()
    }
  },
  mounted(){
    const paintings = document.querySelectorAll('.item.painting')
    paintings.forEach(function (painting) {
        const align = painting.querySelector('.align')
        const divs = align.querySelectorAll('div')
        const totalHeight = Array.from(divs).reduce((acc, div) => acc + div.offsetHeight, 0)

        const animationDuration = divs.length * 1.5

        align.style.transitionDuration = animationDuration + 's'

        painting.addEventListener('mouseenter', function () {
            align.style.transform = 'translateY(-' + totalHeight + 'px)'

            divs.forEach(function (div) {
                const rect = div.getBoundingClientRect()
                const textRect = painting.querySelector('.painting-text').getBoundingClientRect()
                if (rect.top <= textRect.top) {
                    div.style.opacity = '1'
                }
            })
        })
        painting.addEventListener('mouseleave', function () {
            align.style.transform = 'none'
        })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>.
