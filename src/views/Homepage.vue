<template>
  <div class="homepage">
    <div class="banner">
      <div class="bannertitle">
        <img src="../image/homepage/banner_title.png" alt="">
      </div>
      <div class="main swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <img src="../image/homepage/banner_1.png" alt="">
          </li>
          <li class="swiper-slide">
            <img src="../image/homepage/banner_1.png" alt="">
          </li>
          <li class="swiper-slide">
            <img src="../image/homepage/banner_1.png" alt="">
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
        // effect: 'fade',
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
@import "../../node_modules/swiper/css/swiper.min.css";
</style>