<template>
  <div id="app" class="main-layout">
    <Nuxt :key="$route.fullPath"></Nuxt>
  </div>
</template>

<script>
export default {
   data() {
    return {};
  },
  async created() {
    if (process.client) {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  },
};
</script>