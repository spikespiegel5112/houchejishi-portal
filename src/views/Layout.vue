<template>
  <div class='common_layout_container'>
    <div class="common_header_wrapper">
      <div class="top">
        <div class="left">
          <div class="logo">
            <img src="@/image/common/logo.png" alt="">
          </div>
        </div>
        <div class="center"></div>
        <div class="right">
          <p>“吉”成信用的力量</p>
        </div>
      </div>
      <div class="common_nav_wrapper">
        <div class="bg"></div>
        <ul>
          <li v-for='(item, index) in menuDictionary' :key='index' :class="{active:item.active===true}"
            @click='changeNav(item, index)'>
            <router-link :to="item.path">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="common_main_container">
      <router-view />
    </div>

  </div>
</template>

<script>


export default {
  name: 'Layout',

  data() {
    return {
      menuDictionary: [{
        title: '首页',
        path: 'homepage',
        active: false
      }, {
        title: '系统登录',
        path: 'system',
        active: false
      }, {
        title: '产品介绍',
        path: 'introduction',
        active: false
      }, {
        title: '合作机会',
        path: 'cooperation',
        active: false
      }],
      routeData: {}
    }
  },
  watch: {
    routeData(val) {
      this.changeNav(val)
    }
  },
  mounted() {
    this.routeData = this.$route
  },
  methods: {
    changeNav(val) {
      let result = []
      this.menuDictionary.forEach((item) => {
        let aaa = JSON.parse(JSON.stringify(Object.assign(item, {
          active: item.path === val.path.replace('/', '')
        })))
        result.push(aaa)

      })
      this.menuDictionary = result

    }

  }
}
</script>