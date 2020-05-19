<template>
  <div class="homepage">
    <div class="top">
      <div class="decoration"></div>
    </div>
    <div class="banner_wrapper">

      <div class="main swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <div class="bannertitle">
              <img src="../image/homepage/homepage_banner_title_1.png" alt="">
            </div>
            <div class="banner banner1">
              <img src="../image/homepage/banner_1.png" alt="">
            </div>
          </li>
          <li class="swiper-slide">
            <div class="bannertitle">
              <img src="../image/homepage/homepage_banner_title_2.png" alt="">
            </div>
            <div class="banner banner2">
              <img src="../image/homepage/homepage_banner_2.png" alt="">
            </div>
          </li>
          <li class="swiper-slide">
            <div class="bannertitle">
              <img src="../image/homepage/homepage_banner_title_3.png" alt="">
            </div>
            <div class="banner banner2">
              <img src="../image/homepage/homepage_banner_3.png" alt="">
            </div>
          </li>
        </ul>
        <div class="swiper-pagination"></div>

      </div>

    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      new Swiper('.swiper-container', {
        direction: 'vertical',
        mousewheel: true,
        spaceBetween: 300,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,

        },
      })
    }
  }
}
</script>
<style lang="css">
/* @import "../../node_modules/swiper/dist/css/swiper.min.css"; */
</style>