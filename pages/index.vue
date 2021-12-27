<template>
  <div
    id="panel-wrap"
    :class="['panel-wrap d-flex align-items-center justify-content-center']"
    @click="step = 2"
  >
    <!-- <pre style="position: absolute;color: white;top: 0;left: 0;background-color: black;z-index: 500;opacity: 1">
      {{step}} isVertical{{isVertical}} {{$device.isDesktop}} {{deviceType}} iW{{iW}} iH{{iH}} {{myCustoms}}</pre> -->
    <div id="parent-panel-bg-main" :class="['parent-panel-bg-main d-block', myCustoms]">
      <div v-if="step == 1" class="panel-bg-greeting"></div>
      <b-img v-if="step == 1" id="img-char" :src="img1" width="200" />
      <b-img v-if="step == 1" id="img-hand" :src="imgGarfieldHands" width="200" />
      <b-img v-if="step == 1" id="img-garfield" :src="imgGarfield" width="200" />

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
import img1 from "./../assets/images/JAPANESE.png"
import img2 from "./../assets/images/CHINESE.png"
import imgGarfieldHands from "./../assets/images/garfield-hands.png"
import imgGarfield from "./../assets/images/garfield.png"

export default {
  name: "HomePage",
  data() {
    return {
      iW: 0,
      iH: 0,
      // cW: 0,
      // cH: 0,
      deviceType: "",
      step: 1,
      img1: img1,
      img2: img2,
      imgGarfieldHands: imgGarfieldHands,
      imgGarfield: imgGarfield,
      deg: 90,
      isVertical: false
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
        if(this.isVertical) {
          let h = this.iH / 16 * 9;
          if(this.iW > h) return 'style-1';
          else return 'style-2';
        }
        else {
          let w = this.iW / 16 * 9;
          if(this.iH > w) return 'style-2';
          else return 'style-1';
        };
      }
    }
  },
  mounted: async function () {
    if (process.client) {
      this.iW = window.innerWidth;
      this.iH = window.innerHeight;
      this.deviceType = this.$device.isDesktop ? 'desktop' : 'mobile';

      document.getElementsByTagName("body")[0].setAttribute("id", "body");
      var body = document.getElementById('body');

      if(this.iW < this.iH && this.deviceType == "mobile") {
        body.style.webkitTransform = 'rotate('+this.deg+'deg)'; 
        body.style.mozTransform    = 'rotate('+this.deg+'deg)'; 
        body.style.msTransform     = 'rotate('+this.deg+'deg)'; 
        body.style.oTransform      = 'rotate('+this.deg+'deg)'; 
        body.style.transform       = 'rotate('+this.deg+'deg)'; 
        document.getElementById('body').classList.add("vertical");
        this.isVertical = true;
      }

      // this.cW = document.getElementById("panel-bg-main").clientWidth;
      // this.cH = document.getElementById("panel-bg-main").clientHeight;
      // var element = await document.getElementById("parent-panel-bg-main");
      document.getElementById('body').classList.add(this.deviceType);
    }
  },
  methods: {},
};
</script>