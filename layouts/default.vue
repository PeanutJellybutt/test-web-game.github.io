<template>
  <div id="app" class="main-layout">
    <!-- <span class="text-white" style="position:absolute;z-index: 500;left: 0;top: 0;">{{cW}} {{iW }} {{cH}} {{iH}}</span> -->
    <Nuxt :key="$route.fullPath"></Nuxt>
  </div>
</template>

<script>
export default {
   data() {
    return {
      cW: 0,
      iW: 0,
      cH: 0,
      iH: 0,
    };
  },
  async beforeCreate() {
  },
  async created() {
    if (process.client) {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
      this.handleResize();
    }
  },
  // updated: async function () {
  //   if (process.client) {
  //     try {
  //       this.cW = document.getElementById("gm4html5_div_id").clientWidth;
  //       this.iW = window.innerWidth;
  //       this.cH = document.getElementById("gm4html5_div_id").clientHeight;
  //       this.iH = window.innerHeight;
  //     } catch (error) {
        
  //     }
  //   }
  // },
  beforeMount () {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (process.client) {
        const screenSize = {
          width: window.innerWidth,
          height: window.innerHeight,
        };
        this.$store.commit("screenSize/setScreenSize", screenSize);
      }
    },
  },
};
</script>