<template>
  <div
    id="panel-wrap"
    :class="['panel-wrap d-flex align-items-center justify-content-center']"
    @click="step = 2"
  >
    <pre style="position: absolute;color: white;top: 0;left: 0;background-color: black;z-index: 500;opacity: 1">
      {{step}} {{$device.isDesktop}} {{deviceType}} iW{{iW}} iH{{iH}} {{myCustoms}}</pre>
    <div id="parent-panel-bg-main" :class="['parent-panel-bg-main d-block', myCustoms]">
      <div v-if="step == 1" class="panel-bg-greeting">
        <!-- <b-img src="https://picsum.photos/1024/400/?image=41" width="200"></b-img> -->
      </div>
      
      <div :class="['panel-bg-main', step == 1 ? 'd-none' : '' ]" id="panel-bg-main">
        <div class="gm4html5_div_class" id="gm4html5_div_id">
          <canvas id="canvas" class="canvas">
            <p>Your browser doesn't support HTML5 canvas.</p>
          </canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data() {
    return {
      iW: 0,
      iH: 0,
      // cW: 0,
      // cH: 0,
      deviceType: "",
      step: 1
    };
  },
  computed: {
    myCustoms() {
      if(this.$device.isDesktop){
        let w = this.iW / 16 * 9;
        if(this.iH > w) return 'style-2';
        else return 'style-1';
      }
      else
      {
        if(this.iW < this.iH) return 'style-1';
        else return 'style-2';
      }
    }
  },
  mounted: async function () {
    if (process.client) {
      this.iW = window.innerWidth;
      this.iH = window.innerHeight;
      // this.cW = document.getElementById("panel-bg-main").clientWidth;
      // this.cH = document.getElementById("panel-bg-main").clientHeight;
      this.deviceType = this.$device.isDesktop ? 'desktop' : 'mobile';
      var element = await document.getElementById("parent-panel-bg-main");
      element.classList.add(this.deviceType);
    }
  },
  methods: {},
};
</script>