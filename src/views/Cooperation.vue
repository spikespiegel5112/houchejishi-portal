<template>
  <div class="cooperation">
    <div class="bgleft"></div>
    <div class="bgright"></div>
    <div class="banner">
      <div class="main">
        <div class="top">
          <div class="article">
            <h2 :style="animationStyle(0)">服务对象</h2>
            <p :style="animationStyle(0.2)" class="paragraph">线下实体商户，可提供营业执照、经营场地信息和照片； </p>
            <p :style="animationStyle(0.4)" class="paragraph"> 线上商家，可提供营业执照、网址、ICP备案登记信息。 </p>
            <h2 :style="animationStyle(0.6)">开通流程</h2>
            <div :style="animationStyle(0.8)" class="procedure">
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

          </div>
          <div class="picture" :style="animationStyle(3)">
            <img src="../image/cooperation/cooperation_banner.png" alt="">
          </div>
        </div>
        <div class="qa">
          <div class="picture" :style="animationStyle(3)">
            <img src="../image/cooperation/cooperation_banner_2.png" alt="">
          </div>
          <div class='article' :style="animationStyle(1)">
            <h2 :style="animationStyle(1)"><img src="../image/cooperation/cooperation_qa.png" alt=""></h2>
            <dl>
              <dt :style="animationStyle(1.2)">Q：吉市分期的优势是什么？</dt>
              <dd :style="animationStyle(1.4)">A：吉市分期利用先进的金融科技手段，整合全国30多家银行和金融机构的信用产品，为B端商户提供一站式、可编辑的分期收款工具。</dd>
            </dl>
            <dl>
              <dt :style="animationStyle(1.6)">Q：我是线下小商户，可以开通“吉市分期”收款吗？</dt>
              <dd :style="animationStyle(1.8)">A：线下商户能提供营业执照、实际经营店面地址、店面照片、收款账户即可申请开通。</dd>
            </dl>
            <dl>
              <dt :style="animationStyle(2)">Q：我是线上商户，如何申请开通“吉市分期”收款？</dt>
              <dd :style="animationStyle(2.2)">A：线上商户需要提供网址、ICP备案号、收款账户信息即可开通。</dd>
            </dl>
          </div>

        </div>

      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'Cooperation',
  components: {
    Footer
  },
  data() {
    return {
      active1: ''
    }
  },
  mounted() {
    this.init()
    this.getActiveClass()
  },
  methods: {
    init() {

    },
    getActiveClass(time) {
      // let result = 'aaa'
      const timer = () => {
        setTimeout(() => {

          return 'active'

        }, time * 1000)
      }
      return timer()

    },
    animationStyle(time) {
      return 'animation: fromtop2 ' + '0.5' + 's ' + time + 's forwards'
    }
  }
}
</script>


<style lang="scss" scope>
@import "../sass/cooperation.scss";
</style>