<template>
  <div class="common_layout_container">
    <div class="common_header_container">
      <div class="common_header_wrapper">
        <div class="top">
          <div class="left">
            <div class="logo">
              <!-- {{devicePixelRatio}} -->
              <img src="@/image/common/logo.png" alt="" />
              <!-- {{innerWidth}} -->
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
            <li
              v-for="(item, index) in menuDictionary"
              :key="index"
              :class="{ active: item.active === true }"
            >
              <a @click="chooseNav(item, index)">
                {{ item.title }}
              </a>
              <ul v-if="item.menu.length > 0" class="submenu">
                <li v-for="(item2, index2) in item.menu" :key="index2">
                  <a @click="chooseMenu(item2.index, item2)">
                    {{ index2 + 1 }}.{{ item2.title }}
                  </a>
                </li>
              </ul>
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
  name: "Layout",

  data() {
    return {
      menuDictionary: [
        {
          title: "首页",
          path: "/",
          active: false,
          menu: [],
        },
        {
          title: "文心一言",
          path: "/chat",
          active: false,
          menu: [],
        },
        {
          title: "活动案例",
          path: "/",
          active: false,
          menu: [
            {
              title: "依视路",
              path: "/yishilu",
            },
            {
              title: "春天再出发",
              path: "/ppctzcf",
            },
          ],
        },
        {
          title: "产品介绍",
          path: "/introduction",
          active: false,
          menu: [
            {
              title: "吉市分期",
              index: 0,
            },
            {
              title: "百保箱",
              index: 2,
            },
          ],
        },
        {
          title: "合作机会",
          path: "/cooperation",
          active: false,
          menu: [
            {
              title: "分期开通",
              index: 0,
            },
            {
              title: "商务咨询",
              index: 1,
            },
            {
              title: "联系我们",
              index: 2,
            },
          ],
        },
      ],
      routeData: {},
    };
  },
  computed: {
    currentRouteData() {
      return this.$route;
    },
    devicePixelRatio() {
      return devicePixelRatio;
    },
    innerWidth() {
      return window.innerWidth;
    },
  },
  watch: {
    currentRouteData() {
      this.highLightNav();
    },
  },
  mounted() {
    this.routeData = this.$route;
    this.highLightNav(this.$route);
    this.test();
  },
  methods: {
    test() {
      // document.body.style.zoom = 0.67
      document.querySelector(".common_main_container").style.zoom = 1;
    },
    highLightNav() {
      const result = [];
      const routeData = this.currentRouteData;
      this.menuDictionary.forEach((item) => {
        console.log(item.path, routeData.path);

        const nav = JSON.parse(
          JSON.stringify(
            Object.assign(item, {
              active: item.path === routeData.path,
            })
          )
        );

        result.push(nav);
      });
      this.menuDictionary = result;
    },
    chooseNav(data) {
      this.highLightNav(data);

      if (data.path === "/kaizhou") {
        location.href = location.origin + "/kaizhou";
      } else {
        if (data.path !== this.$route.path) {
          this.$router.push({
            path: data.path,
          });
        }
      }
      this.$store.commit("updateSlider", 0);
    },
    chooseMenu(index, data) {
      const isPathRegistered = (path) => {
        const resolved = this.$router.resolve(path);
        return resolved.matched.length > 0;
      };
      console.log(index, data);
      if (!!data.path && data.path !== this.$route.path) {
        if (isPathRegistered(data.path)) {
          this.$router.push({
            path: data.path,
          });
        } else {
          window.location.href = data.path;
        }
      }
      this.$store.commit("updateSlider", index);
    },
  },
};
</script>
