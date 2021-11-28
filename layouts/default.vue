<template>
  <div id="app" class="main-layout">
    <Nuxt :key="$route.fullPath"></Nuxt>
  </div>
</template>

<script>
export default {
  data() {
    return {
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