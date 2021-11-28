<template>
  <div class="panel-wrap d-flex align-items-center justify-content-center">
    <span class="text-white" style="position:absolute;z-index: 500;left: 0;top: 0;">{{cW}} {{iW }} {{cH}} {{iH}} | {{ww ? "w+": "w-"}} {{hh ? "h+": "h-"}}</span>
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
        <b-button v-else variant="link" @click="openFullscreen" id="btnExpand">
          <font-awesome-icon icon="expand" />
        </b-button>
      </div> -->
      <div class="gm4html5_div_class" id="gm4html5_div_id">
        <canvas id="canvas" class="canvas">
          <p>Your browser doesn't support HTML5 canvas.</p>
        </canvas>
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
      ww: false,
      hh: false,
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
  updated: async function () {
    if (process.client) {
      this.cW = document.getElementById("gm4html5_div_id").clientWidth;
      this.iW = window.innerWidth;
      this.cH = document.getElementById("gm4html5_div_id").clientHeight;
      this.iH = window.innerHeight;

      if (this.cW > this.iW) {
        console.log("H", this.cW, this.iW);
        this.ww = true;
      }
      if (this.cH > this.iH) {
        this.hh = true;
        console.log("W", this.cH, this.iH);
        // document.getElementById("gm4html5_div_id").style.height = `100%`;
        // document.getElementById("canvas").style.height = `100%`;

        
        document.getElementById("gm4html5_div_id").style.maxHeight = `100vh`;
        document.getElementById("canvas").style.maxHeight = `100vh`;
        document.getElementById("gm4html5_div_id").style.width = `${(this.iH / 9) * 16}px`;
        document.getElementById("canvas").style.width = `${(this.iH / 9) * 16}px`;
        document.getElementById("canvas").style.height = `100vh`;
      }

    }
  },
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
.panel-wrap {
  position: relative;
  max-width: 100%;
  height: 100vh;
}
.canvas {
  width: 100%;
}
.gm4html5_div_class {
  position: relative;
  width: 100%;
}
.btns {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 500;
}
.btns svg {
  color: gray !important;
  font-size: 1.5rem;
}
</style>
