<template>
  <div :class="[
      'panel-wrap d-flex align-items-center justify-content-center ', 
      this.$store.state.screenSize.width < this.$store.state.screenSize.height ? 'horizontal' : 'vertical' 
    ]">
    <client-only>
      <!-- <div class="btns">
        <b-button
          v-if="isFullScreen"
          variant="link"
          @click="closeFullscreen"
          id="btnCompress"
        >
          <font-awesome-icon icon="compress" />
        </b-button>
        <b-button
          v-else
          variant="link"
          @click="openFullscreen"
          id="btnExpand"
        >
          <font-awesome-icon icon="expand" />
        </b-button>
      </div> -->
      <div class="gm4html5_div_class" id="gm4html5_div_id">
        <!-- <b-aspect :aspect="16/9"> -->
          <canvas id="canvas" class="canvas">
            <p>Your browser doesn't support HTML5 canvas.</p>
          </canvas>
        <!-- </b-aspect> -->
      </div>
    </client-only>
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
  //   asyncData({ params, $axios, redirect }) {
  //     return $axios
  //       .get(`${process.env.BASE_URL}/employee/${encodeURI(params.urlkey)}`)
  //       .then((data) => {
  //         if (data.result == 1) {
  //           return {
  //             info: data.detail,
  //           };
  //         }
  //       })
  //       .catch((err) => {
  //         redirect(`/404`);
  //       });
  //   },
  // mounted: async function () {
  //   if (process.client) {
  //     this.cW = document.getElementById("gm4html5_div_id").clientWidth;
  //     this.iW = window.innerWidth;
  //     this.cH = document.getElementById("gm4html5_div_id").clientHeight;
  //     this.iH = window.innerHeight;
  //   }
  // },
  methods: {
    openFullscreen: async function () {
      if (process.client) {
        var elem = document.getElementById("gm4html5_div_id");
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        }
        this.isFullScreen = true;
      }
    },
    closeFullscreen: async function () {
      if (process.client) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
        this.isFullScreen = false;
      }
    },
    // getDatas: async function () {
    //   if (process.client) {
    //     await this.$axios
    //       .get(`${process.env.BASE_URL}/employee/${this.urlkey}`)
    //       .then(async (resData) => {
    //         if (resData.result == 1) {
    //           this.info = resData.detail;
    //           this.tel = this.info.telephone.replace("(0)", "");
    //           this.tel = this.tel.replaceAll("-", "");
    //         } else {
    //         }
    //       });
    //     this.isLoading = false;
    //   }
    // },
  },
};
</script>

<style scoped>
.panel-wrap{
  position: relative;
  width: 100vw;
  height: 100vh;
}
.canvas {
  max-width: 100vw;
  max-height: 100vh;
  width: 100vw;
}
.gm4html5_div_class {
  position: relative;
}
.btns {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 500;
}
.btns svg{
  color: gray !important;
  font-size: 1.5rem;
}
.horizontal .canvas {
  max-width: 100vh;
  max-height: 100vw;
  width: calc(100vw / 9 * 16) !important;
}
.horizontal .gm4html5_div_class {
  transform: rotate(90deg);
  transform-origin:center ;
}
@media (max-width: 991.98px) and (orientation: landscape) {
  .canvas {
    height: calc(100vw / 16 * 9);
  }
}
@media (max-width: 991.98px) { 
  .panel-wrap.horizontal {
    /* height: calc(100vh - 56px); */
  }
  .horizontal .canvas {
    /* max-height: calc(100vh - 56px); */
  }
}
</style>
