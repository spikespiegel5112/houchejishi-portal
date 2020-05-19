<template>
  <div class="homepage">
    <div class="top">
      <div class="decoration"></div>
    </div>
    <div class="banner_wrapper">

      <div class="main swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide page page1" :class="getActiveClass(0)">
            <div class="bannertitle">
              <img src="../image/homepage/homepage_banner_title_1.png" alt="">
            </div>
            <div class="bannerpicture">
              <div class="banner">
                <img src="../image/homepage/banner_1.png" alt="">
              </div>
            </div>

          </li>
          <li class="swiper-slide page page2" :class="getActiveClass(1)">
            <div class="bannertitle">
              <img src="../image/homepage/homepage_banner_title_2.png" alt="">
            </div>
            <div class="bannerpicture">
              <div class="banner">
                <img src="../image/homepage/homepage_banner_2.png" alt="">
              </div>
            </div>

          </li>
          <li class="swiper-slide page page3" :class="getActiveClass(2)">
            <div class="bannertitle">
              <img src="../image/homepage/homepage_banner_title_3.png" alt="">
            </div>
            <div class="bannerpicture">
              <div class="banner">
                <img src="../image/homepage/homepage_banner_3.png" alt="">
              </div>
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
  data() {
    return {
      swiperInstance: {},
      activeIndex: null,
      previousIndex: null,
      slidingFlag: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.swiperInstance = new Swiper('.swiper-container', {
        direction: 'vertical',
        mousewheel: true,
        spaceBetween: 300,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,

        },
      })
      this.swiperInstance.on('slideChange', () => {
        console.log('slide activeIndex', this.swiperInstance.activeIndex);
        console.log('slide previousIndex', this.swiperInstance.previousIndex);
        this.activeIndex = this.swiperInstance.activeIndex
        this.previousIndex = this.swiperInstance.previousIndex
        this.swiperInstance.on('slideChangeTransitionStart', () => {
          this.slidingFlag = true
        })
        this.swiperInstance.on('slideChangeTransitionEnd', () => {
          this.slidingFlag = false
        })
      });
      setTimeout(() => {
        this.activeIndex = 0

      }, 200)
    },
    getActiveClass(index) {
      let result = ''
      if (index === this.activeIndex) {
        if ((this.previousIndex || 0) - this.activeIndex <= 0) {
          result = 'fromtop'
        } else {
          result = 'frombottom'
        }
        result = 'active ' + result
      }

      return result

    },
  }
}
</script>


<style lang="scss" scoped>
@import "../sass/homepage.scss";
</style>