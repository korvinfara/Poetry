<template>
    <div class="header index">
        <div class="center">
            <div class="logo">
                <router-link class="logo-link" to="/">
                    <div class="logo-icon">
                        <img class="icon" src="@/assets/svg/logo.svg"/>
                    </div>
                    <div class="logo-text">
                        <div class="name">Игорь Булгаков</div>
                        <div class="legend">философия — живопись — поэзия</div>
                    </div>
                </router-link>
            </div>
            <button class="button mobile" id="menu-button" @click="mobileClick">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <div class="menu" id="primary-menu">
                <div class="menu-list">
                    <div class="menu-item ">
                        <router-link class="item-link" to="/about">о творчестве</router-link>
                    </div>
                    <div class="menu-item ">
                        <router-link class="item-link" to="/gallery">галерея</router-link>
                    </div>
                    <div class="menu-item ">
                        <router-link class="item-link" to="/poems">поэзия</router-link>
                    </div>
                    <div class="menu-item ">
                        <router-link class="item-link" to="/events">события</router-link>
                    </div>
                    <div class="menu-item ">
                        <router-link class="item-link" to="/books">книги</router-link>
                    </div>
                    <div class="menu-item ">
                        <router-link class="item-link" to="/contacts">контакты</router-link>
                    </div>
                </div>
                <div class="cart">
                    <router-link class="menu-item " to="/cart">
                        <div class="cart-icon">
                            <img class="icon active" src="@/assets/svg/cart_w.svg"/>
                            <img class="icon empty" src="@/assets/svg/cart_g.svg"/>
                            <div class="cart-value">3</div>
                        </div>
                    </router-link>
                    <div class="cart-popup ">
                        <img class="pointer" src="@/assets/svg/cart_pointer.svg"/>
                        <div class="painting">
                            <img class="image" src="@/assets/jpg/picture_01.jpg">
                        </div>
                        <div class="add">Добавлена в заявку</div>
                        <router-link class="link-more" to="/cart">
                            <div class="text">Перейти к оформлению</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  mounted () {
    const mobileMenuButton = document.querySelector('button')
    const body = document.body
    console.log('>>', mobileMenuButton)
    mobileMenuButton.onclick = function () {
    mobileMenuButton.classList.toggle('checked')
    body.classList.toggle('overflow')
    return null
}
  },
  mathods: {
    mobileClick () {
      console.log('===========')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
