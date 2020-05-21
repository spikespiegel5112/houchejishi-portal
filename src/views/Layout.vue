<template>
  <div class='common_layout_container'>
    <div class="common_header_container">
      <div class="common_header_wrapper">
        <div class="top">
          <div class="left">
            <div class="logo">
              <img src="@/image/common/logo.png" alt="">
            </div>
          </div>
          <div class="center">
            <p>联系电话：400-9999-729</p>
          </div>
          <div class="right">
            <p>邮箱：mx-sh@mx-leasing.com</p>
          </div>
        </div>
        <div class="common_nav_wrapper">
          <div class="bg"></div>
          <ul>
            <li v-for='(item, index) in menuDictionary' :key='index' :class="{active:item.active===true}"
              @click='chooseNav(item, index)'>
              <a href="javascript:;">{{item.title}}</a>
              <!-- <router-link v-else :to="item.path">{{item.title}}</router-link> -->
            </li>
          </ul>
        </div>
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
        path: '',
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
      this.highlightBav(val)
    }
  },
  mounted() {
    this.routeData = this.$route
  },
  methods: {
    highlightBav(val) {
      let result = []
      this.menuDictionary.forEach((item) => {
        let aaa = JSON.parse(JSON.stringify(Object.assign(item, {
          active: item.path === val.path.replace('/', '')
        })))
        result.push(aaa)

      })
      this.menuDictionary = result

    },
    chooseNav(path) {
      this.highlightBav(path)
      this.$router.push({
        path: path
      })
    }

  }
}
</script>