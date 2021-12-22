<template>
<div id="panel-wrap" :class="[
    'panel-wrap d-flex align-items-center justify-content-center'
  ]"> 
        <pre style="position: absolute;color: white;top: 0;left: 0;background-color: black;z-index: 500;opacity: 0.5">
        isDesktop {{$device.isDesktop}} {{deviceType}}</pre>
  <div v-if="!isLoading" :class="['panel-bg-main', deviceType]" id="panel-bg-main">
    <div class="gm4html5_div_class" id="gm4html5_div_id">
        <canvas id="canvas" class="canvas">
          <p>Your browser doesn't support HTML5 canvas.</p>
        </canvas>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "HomePage",
  data() {
    return {
      // cW: 0,
      iW: 0,
      // cH: 0,
      iH: 0,
      isLoading: true,
      deviceType: "mobile"
    };
  },
  // computed: {
  //   deviceType() {
  //     return this.$device.isDesktop  ? 'desktop' : 'mobile';
  //   }
  // },
  watch: {
    "$device.isDesktop"(newValue, oldValue) {
      this.deviceType = newValue ? 'desktop' : 'mobile';
    }
  },
  created: async function () {
    if (process.client) {
      this.iW = window.innerWidth;
      this.iH = window.innerHeight;
      // this.cW = document.getElementById("panel-bg-main").clientWidth;
      // this.cH = document.getElementById("panel-bg-main").clientHeight;
      await setTimeout(() => { 
        this.isLoading = false 
      }, 1);
      this.deviceType = this.$device.isDesktop ? 'desktop' : 'mobile';
    }
  },
  methods: {},
};
</script>