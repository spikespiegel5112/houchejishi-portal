<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/sass/reset.scss";
@import "@/sass/layout.scss";
@import "@/sass/common.scss";
@import "@/sass/mediaquery.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style lang="css">
@import "../node_modules/swiper/dist/css/swiper.min.css";
@import "./assets/icon/iconfont.css";
</style>