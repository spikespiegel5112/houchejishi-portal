<template>
  <div class="cooperation">
    <div class="banner">
      <div class="main swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide page1">
            <div class="content ">
              <div class="article">
                <h2>服务对象</h2>
                <p class="paragraph">线下实体商户，可提供营业执照、经营场地信息和照片； </p>
                <p class="paragraph"> 线上商家，可提供营业执照、网址、ICP备案登记信息。 </p>
                <h2>开通流程</h2>
                <div class="procedure">
                  <ul>
                    <li>
                      <p>提交商户开通申请</p>
                    </li>
                    <li>
                      <p>签署服务协议</p>
                    </li>
                    <li>
                      <p>开通平台账号</p>
                    </li>
                    <li>
                      <p>完成开通</p>
                    </li>
                  </ul>
                </div>

                <h2><img src="../image/cooperation/cooperation_qa.png" alt=""></h2>
              </div>
            </div>
            <div class="picture">
              <img src="../image/cooperation/cooperation_banner.png" alt="">
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
        cubeEffect: {
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        mousewheel: {
          sensitivity: 9999
        },
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


<style lang="scss">
@import "../sass/cooperation.scss";
</style>