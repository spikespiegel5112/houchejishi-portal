<template>
  <div class="cooperation">
    <div class="bgleft"></div>
    <div class="bgright"></div>
    <div class="banner">
      <div class="main">
        <div class="content">
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
          <div class="picture">
            <img src="../image/cooperation/cooperation_banner.png" alt="">
          </div>
        </div>
        <div class="qa">
          <div class='content'>
            <dl>
              <dt>Q：吉市分期的优势是什么？</dt>
              <dd>A：吉市分期利用先进的金融科技手段，整合全国30多家银行和金融机构的信用产品，为B端商户提供一站式、可编辑的分期收款工具。</dd>
            </dl>
            <dl>
              <dt>Q：我是线下小商户，可以开通“吉市分期”收款吗？</dt>
              <dd>A：线下商户能提供营业执照、实际经营店面地址、店面照片、收款账户即可申请开通。</dd>
            </dl>
            <dl>
              <dt>Q：我是线上商户，如何申请开通“吉市分期”收款？</dt>
              <dd>A：线上商户需要提供网址、ICP备案号、收款账户信息即可开通。</dd>
            </dl>
          </div>
        </div>

      </div>

    </div>
    <!-- <div class="footer"></div> -->
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