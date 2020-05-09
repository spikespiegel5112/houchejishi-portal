<template>
  <div class="introduction">
    <div class="banner">
      <div class="main swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <div class="content page1">
              <div class="title">
                <img src="../image/introduction/slide_title_1.png" alt="">
              </div>
              <div class="article">
                <h2>吉市分期产品简介</h2>
                <p class="paragraph"> 吉市分期整合了全国27家商业银行、支付宝等金融机构信用产品，为商户提供一站式的分期产品定制服务；可为终端消费者提供0手续费的优质分期服务。</p>
                <h2>核心竞争力</h2>
                <ul class="rules">
                  <li>安全、可靠的专业金融服务平台 </li>
                  <li>前沿的技术手段引领分期秒支付</li>
                  <li>值得信赖的国有金融机构</li>
                  <li>从消费者征信到消费分期额度的充分转化</li>
                  <li>商户自由订制的灵活分期产品</li>
                </ul>
              </div>
            </div>
            <div class="picture">
              <img src="../image/introduction/slide_1.png" alt="">
            </div>
          </li>
          <li class="swiper-slide">
            <div class="content page2">
              <div class="picture">
                <img src="../image/introduction/slide_1.png" alt="">
              </div>
              <div>
                <div class="title">
                  <img src="../image/introduction/slide_title_1.png" alt="">
                </div>
                <div class="article">
                  <h2>吉市分期产品简介</h2>
                  <p class="paragraph"> 吉市分期整合了全国27家商业银行、支付宝等金融机构信用产品，为商户提供一站式的分期产品定制服务；可为终端消费者提供0手续费的优质分期服务。</p>
                  <h2>核心竞争力</h2>
                  <ul class="rules">
                    <li>安全、可靠的专业金融服务平台 </li>
                    <li>前沿的技术手段引领分期秒支付</li>
                    <li>值得信赖的国有金融机构</li>
                    <li>从消费者征信到消费分期额度的充分转化</li>
                    <li>商户自由订制的灵活分期产品</li>
                  </ul>
                </div>
              </div>

            </div>

          </li>
          <li class="swiper-slide">
            <img src="../image/introduction/slide_1.png" alt="">
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

<style lang="scss">
@import "../sass/introduction.scss";
</style>