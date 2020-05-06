<template>
  <div class='common_layout_container'>
    <div></div>
    <div class="common_header_wrapper">
      <div class="top">
        <div class="left">
          <div class="logo">
            <img src="@/image/common/logo.png" alt="">
          </div>
        </div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
      <div class="common_nav_wrapper">
        <div class="bg"></div>
        <ul>
          <li v-for='(item, index) in menuDictionary' :key='index'>
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
  components: {

  },
  data() {
    return {
      menuDictionary: [{
        title: '首页',
        path: 'homepage',
        active: false
      }, {
        title: '系统登录',
        path: 'homepage',
        active: false
      }, {
        title: '产品介绍',
        path: 'introduction',
        active: false
      }, {
        title: '合作机会',
        path: 'contact',
        active: false
      }]
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {


  }
}
</script>

<style lang="scss" scoped>
</style>