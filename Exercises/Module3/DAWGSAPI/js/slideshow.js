new Vue({
  el: "#app",

  data() {
    return {
      info: null,
      moreData: [],
      imgMaker: [],
      whichDawg: "",
      selector: 0,
    };
  },
  mounted: function mounted() {
    this.showme("cocker");
  },

  methods: {
    async showme(index) {
      await axios
        .get(`https://dog.ceo/api/breed/spaniel/${index}/images`)
        .then((response) => (this.info = response.data));
      console.log(this.info.message);
      this.moreData = this.info.message;
      this.slider();
    },
    slider() {
      this.whichDawg = this.moreData[this.selector];
      this.selector++;
    },
  },
});
