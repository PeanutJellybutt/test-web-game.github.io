<template>
  <b-container>
    <b-row>
      <b-col>
        Garfield Game
        <client-only>
          <!-- <Game /> -->
          <div class="gm4html5_div_class" id="gm4html5_div_id">
            <!-- Create the canvas element the game draws to -->
            <b-aspect :aspect="16/9">
              <canvas id="canvas" class="canvas">
            <!-- <canvas id="canvas" width="1024" height="576" > -->
                <p>Your browser doesn't support HTML5 canvas. </p>
              </canvas>
            </b-aspect>
          </div>
        </client-only>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import Game from "@/components/game/index";

export default {
  name: "HomePage",
  components: {
    // Game
  },
  data() {
    return {};
  },
  // <client-only>

  // if (process.client) {

  //   metaInfo() {
  //     return {
  //       title: this.info.nameTh,
  //       titleTemplate: "%s : Garfield",
  //     };
  //   },
  //   head() {
  //     return {
  //       title: this.info.nameTh,
  //       titleTemplate: "%s : Garfield",
  //       meta: [
  //         {
  //           property: "og:locale",
  //           content: "th_TH",
  //         },
  //         {
  //           hid: "og:type",
  //           property: "og:type",
  //           content: "article",
  //         },
  //         {
  //           property: "og:url",
  //           content: "https://Garfield.com",
  //         },
  //         {
  //           hid: "og:site_name",
  //           property: "og:site_name",
  //           content: "Garfield.com",
  //         },
  //         {
  //           name: "title",
  //           content: `${this.info.nameTh} : Garfield`,
  //         },
  //         {
  //           name: "Keyword",
  //           content: "Garfield",
  //         },
  //         {
  //           name: "og:title",
  //           content: `${this.info.nameTh} : Garfield`,
  //         },
  //         {
  //           property: "og:image",
  //           content: this.info.imageUrl || "",
  //         },
  //       ],
  //     };
  //   },
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
  created: async function () {
    // if (process.client) {
    //   window.onload = GameMaker_Init;
    // }
  //     this.urlkey = this.$route.params.urlkey;
  //     await this.getDatas();
  },
  methods: {
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
.canvas {
  width: 100%;
  height: 100%;
}
</style>
