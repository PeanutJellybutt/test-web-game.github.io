<template>
<div id="panel-wrap" :class="[
    'panel-wrap d-flex align-items-center justify-content-center', mobile
  ]"> 
  <!-- <div style="position: absolute;color: white;top: 0;left: 0;background-color: black;z-index: 500;">cW={{cW}} iW={{iW}} cH={{cH}} iH={{iH}}</div> -->
  <div class="panel-bg-main" id="panel-bg-main">
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
  components: {},
  data() {
    return {
      isFullScreen: false,
      cW: 0,
      iW: 0,
      cH: 0,
      iH: 0,
      mobile: ""
    };
  },
  watch: {
    "iW"(newValue, oldValue) {
      // console.log(this.iW, newValue, oldValue);
      if(newValue != 0 && newValue <= 768) this.mobile = "mobile";
      else return ""
    }
  },
  // updated: {
  //   mobile() {
  //     if(this.$store.state.screenSize.width == 0) return "dd"
  //     else if(this.$store.state.screenSize.width <= 768) return "mobile"
  //     // return this.$store.state.screenSize.width != 0 && this.$store.state.screenSize.width <= 768;
  //   }
  // },
  created: async function () {
    if (process.client) {
      this.iW = window.innerWidth;
      this.iH = window.innerHeight;
      this.cW = document.getElementById("panel-bg-main").clientWidth;
      this.cH = document.getElementById("panel-bg-main").clientHeight;
    }
  },
  methods: {},
};
</script>