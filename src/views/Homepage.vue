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
                <!-- {{require('@/image/homepage/homepage_banner_1.png')}} -->
                <!-- <div class="picture" style="background-image:url(../image/homepage/banner_1.png);"></div> -->
                <div class="picture"
                  :style="{backgroundImage:'url('+require('@/image/homepage/homepage_banner_1.png')+')'}"></div>
              </div>
            </div>

          </li>
          <li class="swiper-slide page page2" :class="getActiveClass(1)">
            <div class="bannertitle">
              <img src="../image/homepage/homepage_banner_title_2.png" alt="">
            </div>
            <div class="bannerpicture">
              <div class="banner">
                <div class="picture"
                  :style="{backgroundImage:'url('+require('@/image/homepage/homepage_banner_2.png')+')'}"></div>
              </div>

            </div>
            <!-- <div class="cooperation">
              <h3>合作金融机构</h3>
              <div class="picture"
                :style="{backgroundImage:'url('+require('../image/homepage/homepage_banner_2_cooperation.png')+')'}">
              </div>
            </div> -->
          </li>
          <li class="swiper-slide page page3" :class="getActiveClass(2)">
            <div class="content">
              <div class="bannertitle">
                <img src="../image/homepage/homepage_banner_title_3.png" alt="">
              </div>
              <div class="bannerpicture">
                <div class="banner">
                  <div class="picture"
                    :style="{backgroundImage:'url('+require('@/image/homepage/homepage_banner_3.png')+')'}"></div>
                </div>
              </div>
            </div>

            <div class="footer">
              <div class="content">
                <ul>
                  <li>©2020 上海厚车吉市网络科技有限公司 版权所有</li>
                  <li>ICP备案号：沪ICP备19042645号-1</li>
                  <li>公安部备案号</li>
                </ul>
              </div>
            </div>

          </li>
        </ul>
        <div class="swiper-pagination"></div>

      </div>

    </div>
    <div class="corner"></div>
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