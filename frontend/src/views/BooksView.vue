<template>
<div class="main">
            <div class="module books">
                <div class="module-center">
                    <h2 class="module-title">Книги</h2>
                    <div class="module-text">
                        <i>
                            Будем учиться вспоминать. Будем учиться чувствовать. Будем учиться осознавать.<br/>
                            Будем учиться знать. Будем учиться думать и говорить. Будем учиться жить.
                        </i>
                    </div>
                    <div class="module-content">
                        <div class="grid books page">
                            <div class="column">
                                <a class="item book" href="/books-item">
                                    <div class="book-image">
                                        <img class="image" src="@/assets/jpg/book01---Слова-рождённые-душой_800.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div class="column">
                                <a class="item book" href="/books-item">
                                    <div class="book-image">
                                        <img class="image" src="@/assets/jpg/book02---поэтические-полотна_800.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div class="column">
                                <a class="item book" href="/books-item">
                                    <div class="book-image">
                                        <img class="image" src="@/assets/jpg/book03_В_спираль_закрученная_мысль_800.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div class="column">
                                <a class="item book" href="/books-item">
                                    <div class="book-image">
                                        <img class="image" src="@/assets/jpg/book04---Звездопад-на-каждый-день_800.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div class="column">
                                <a class="item book" href="/books-item">
                                    <div class="book-image">
                                        <img class="image" src="@/assets/jpg/book05---Директория-любви_800.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div class="column">
                                <a class="item book" href="/books-item">
                                    <div class="book-image">
                                        <img class="image" src="@/assets/jpg/book06---Знакомьтесь-это-мы_800.jpg"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="foreword gallery">
        <div class="shadow"></div>
        <div class="content">
            <button class="close">
                <img class="icon one" src="@/assets/svg/close_g.svg">
                <img class="icon two" src="@/assets/svg/close_y.svg">
            </button>
            <div class="align">
                <div class="title bold">
                    «Экология сознания»
                </div>
                <div class="title">
                    Предисловие
                </div>
                <div class="text">
                    Синтез живописи и поэзии. Авторский тематический цикл
                    доктора философии, поэта и живописца Игоря Булгакова
                    (члена творческого Союза художников России, члена
                    Союза писателей России).
                </div>
                <div class="text quote">
                    <div>Когда бы нам увидеть дали ТО</div>
                    <div>Что кроется за гранью пониманья</div>
                    <div>Возможно некоторым это помогло б</div>
                    <div>Расширить зону самоосознанья</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  components: {

  },
  name: 'BooksView',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
