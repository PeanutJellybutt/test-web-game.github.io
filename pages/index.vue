<template>
<div id="panel-wrap" :class="[
    'panel-wrap d-flex align-items-center justify-content-center', 
    $store.state.screenSize.width <= 768 && $store.state.screenSize.width != 0 ? 'mobile' : 'desktop'
  ]"> 
  <!-- <div style="position: absolute;color: white;top: 0;left: 0;background-color: black;}">{{$store.state.screenSize.width}} cW={{cW}} iW={{iW}} cH={{cH}} iH={{iH}}</div> -->

  <div class="panel-bg-main" id="panel-bg-main">
    <div class="gm4html5_div_class " id="gm4html5_div_id">
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
    };
  },
  created: async function () {
    if (process.client) {
      this.cW = document.getElementById("panel-bg-main").clientWidth;
      this.iW = window.innerWidth;
      this.cH = document.getElementById("panel-bg-main").clientHeight;
      this.iH = window.innerHeight;
    }
  },
  methods: {},
};
</script>