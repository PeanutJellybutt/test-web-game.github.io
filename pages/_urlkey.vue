<template>
  <b-container class="h-100" v-if="!isLoading">
    <b-row>
      <b-col>
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      info: {},
      urlkey: "",
      isLoading: true,
      tel: "",
    };
  },
  metaInfo() {
    return {
      title: this.info.nameTh,
      titleTemplate: "%s : Garfield",
    };
  },
  head() {
    return {
      title: this.info.nameTh,
      titleTemplate: "%s : Garfield",
      meta: [
        {
          property: "og:locale",
          content: "th_TH",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: "https://Garfield.com",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Garfield.com",
        },
        {
          name: "title",
          content: `${this.info.nameTh} : Garfield`,
        },
        {
          name: "Keyword",
          content: "Garfield",
        },
        {
          name: "og:title",
          content: `${this.info.nameTh} : Garfield`,
        },
        {
          property: "og:image",
          content: this.info.imageUrl || "",
        },
      ],
    };
  },
  asyncData({ params, $axios, redirect }) {
    return $axios
      .get(`${process.env.BASE_URL}/employee/${encodeURI(params.urlkey)}`)
      .then((data) => {
        if (data.result == 1) {
          return {
            info: data.detail,
          };
        }
      })
      .catch((err) => {
        redirect(`/404`);
      });
  },
  created: async function () {
    this.urlkey = this.$route.params.urlkey;
    
    await this.getDatas();
  },
  methods: {
    getDatas: async function () {
      if (process.client) {
        await this.$axios
          .get(`${process.env.BASE_URL}/employee/${this.urlkey}`)
          .then(async (resData) => {
            if (resData.result == 1) {
              this.info = resData.detail;
              this.tel = this.info.telephone.replace("(0)", "");
              this.tel = this.tel.replaceAll("-", "");
            } else {

            }
          });
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
h2,
h4,
h5,
.f-desc {
  margin-bottom: 0;
  line-height: 1;
}
.panel-bottom img {
  width: 150px;
}
.panel-bottom a {
  color: black !important;
  font-size: 1.5rem;
  line-height: 1;
}
.b-avatar {
  box-shadow: 0px 2px 4px 3px black;
}
.link-white {
  color: white !important;
  text-decoration: none !important;
}
.txt-h2,
.txt-h4,
.txt-h5,
.f-desc {
  color: white !important;
  font-weight: 500;
  margin-top: 0;
  font-family: "Cordia New" !important;
  overflow-y: hidden;
}
.f-desc {
  font-size: 1.35rem;
}
</style>
