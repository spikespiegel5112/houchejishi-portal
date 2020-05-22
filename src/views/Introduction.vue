<template>
  <div class="introduction" ref='introduction' v-on:mousemove='perspactive'>
    <div class="top" ref='top' :style='topOffset'>
      <!-- <div class="decoration1"></div> -->
      <div class="decoration2"></div>
      <div class="decoration3"></div>
    </div>
    <div class="banner">
      <div class="main swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide page1" :class="getActiveClass(0)">
            <div class="content ">
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
              <img src="../image/introduction/introduction_slider_1.png" alt="">
            </div>

          </li>
          <li class="swiper-slide page2" :class="getActiveClass(1)">
            <div class="picture">
              <img src="../image/introduction/introduction_slider_2.png" alt="">
            </div>
            <div class="content ">
              <div class="article">
                <h2>我们的服务</h2>
                <div class="paragraph">
                  <dl>
                    <dt>服务对象：</dt>
                    <dd>有C端销售需求的中小型商户</dd>
                  </dl>
                  <dl>
                    <dt>服务方式：</dt>
                    <dd>免费向商户提供支付平台技术接入，多种支付渠道供C端消费者选择</dd>
                  </dl>
                  <dl>
                    <dt>平台优势：</dt>
                    <dd>
                      <p>整合各大银行资源</p>
                      <p>联合银联共同开发</p>
                      <p>多渠道线上线下无感快捷支付</p>
                      <p>C端消费者0秒申请分期</p>
                    </dd>
                  </dl>
                </div>
                <h2>吉市分期亮点</h2>
                <p class="hint">产品质量是根本、免息分期无感支付是亮点，让我们联合给客户不一样的购物体验。</p>
                <ul class="rules">
                  <li>商户可选择对产品可分期期数自主多元化选择 </li>
                  <li>有商户自由分期手续费补贴，同时，可自由选择全期数补贴和部分期数补贴</li>
                  <li>现有支付方式;花呗、信用卡（国内主流银行）</li>
                  <li>开发中的新支付方式：在线无卡申请消费额度，0秒批额即可使用</li>
                </ul>
              </div>

            </div>

          </li>
          <li class="swiper-slide page3" :class="getActiveClass(2)">
            <div class="content ">
              <div class="article">
                <h1>付车险，就一点</h1>
                <p class="paragraph">
                  “百保箱”是由明羡融资租赁（上海）有限公司设计推出的专业保费分期产品，产品系列覆盖车险，附加商业险、其他财产险等多险种类型，为企业用户及个人用户提供专业、优质、便捷的保费分期服务。
                </p>
                <p class="paragraph">
                  “百保箱”基于智能化业务系统，运用大数据风控，打造极致用户体验。用户通过小程序或者APP实现即时远程签约，让保费分期触手可及。首付低至10%，最高期限10个月，最低0利率，百保箱真正做到“付车险，就一点”。
                </p>
              </div>

            </div>
            <div class="picture">
              <img src="../image/introduction/introduction_slider_3.png" alt="">
            </div>

          </li>
        </ul>
        <div class="swiper-pagination"></div>

      </div>
      <div class="footer" ref='footer' :style='bottomOffset'>
        <div class="decoration1"></div>
        <div class="decoration2"></div>
        <div class="decoration3"></div>
        <div class="decoration4"></div>
        <div class="decoration5"></div>
        <div class="decoration6"></div>
      </div>

    </div>

  </div>
</template>

<script>
import Swiper from 'swiper'

// @ is an alias to /src

export default {
  name: 'Introduction',
  components: {
  },
  data() {
    return {
      swiperInstance: {},
      activeIndex: null,
      previousIndex: null,
      slidingFlag: false,
      footerDecoration: [],
      topDecoration: []
    }
  },
  computed: {
    topOffset() {
      const totalOffset = 66;
      const offset = totalOffset / 3
      return {
        top: -offset * this.activeIndex + 'px'
      }
    },
    bottomOffset() {
      const totalOffset = 66;
      const offset = totalOffset / 3
      return {
        bottom: -totalOffset + offset * (this.activeIndex + 1) + 'px'
      }
    },
    footerRandomDictionary() {
      let result = []
      this.footerDecoration.forEach(() => {
        const item = Math.random() > 0.5 ? '1' : '-1'
        result.push(item)
      })
      return result
    },
    topRandomDictionary() {
      let result = []
      this.footerDecoration.forEach(() => {
        const item = Math.random() > 0.5 ? '1' : '-1'
        result.push(item)
      })
      return result
    }

  },
  async mounted() {
    this.init()
    await this.$nextTick()
    setTimeout(() => {
      this.initDecoration()

    }, 300)
  },
  methods: {
    init() {
      this.swiperInstance = new Swiper('.swiper-container', {
        direction: 'vertical',
        mousewheel: {
          sensitivity: 9999
        },
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
    active() {

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
    initDecoration() {
      const oLi = this.$refs.footer.children;
      const oLi2 = this.$refs.top.children;
      this.footerDecoration = oLi
      this.topDecoration = oLi2
    },
    perspactive(event) {
      const x = document.body.offsetWidth / 2,
        y = document.body.offsetHeight / 2;
      const oLi = this.footerDecoration
      const oLi2 = this.topDecoration
      //获取鼠标在当前窗口内的坐标值，也可以改为获取指定层的坐标:event.offsetX
      var mx = event.clientX,
        my = event.clientY;
      let marginLeft = ''
      let marginTop = ''
      //开始为每个要动的元素设置左边距和上边距，以每个元素的不同zIndex值来区别移动量
      marginLeft = (x - mx) / 90
      marginTop = (y - my) / 70


      for (let i = 0; i < oLi.length; i++) {
        //左边距和上边距的值可以随意调整
        let zIndex = window.getComputedStyle(oLi[i]).zIndex
        oLi[i].style.transform = 'translate(' + marginLeft * zIndex * this.footerRandomDictionary[i] + 'px,' + marginTop * zIndex * -this.footerRandomDictionary[i] + 'px)';

      }
      for (let i = 0; i < oLi2.length; i++) {
        let zIndex = window.getComputedStyle(oLi2[i]).zIndex
        oLi2[i].style.transform = 'translate(' + marginLeft * zIndex * -this.topRandomDictionary[i] + 'px,' + marginTop * zIndex * this.topRandomDictionary[i] + 'px)';
      }

    },
  }
}
</script>


<style lang="scss" scope>
@import "../sass/introduction.scss";
</style>