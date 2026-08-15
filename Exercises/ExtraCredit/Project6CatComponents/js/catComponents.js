Vue.component("cat-slideshow", {
  props: ["whichcat"],
  data() {
    return {
      image: "",
      thename: "",
      description: "",
      temperament: "",
      origin: "",
      adapt: 0,
      allofit: [],
      i: 0,
    };
  },
  created() {
    this.loadNextImage(this.whichcat);
  },
  watch: {
    whichcat(newVal) {
      this.loadNextImage(newVal);
    },
  },
  methods: {
    async loadNextImage(breedID) {
      try {
        axios.defaults.headers.common["x-api-key"] =
          "5707ff43-c0b5-456f-864a-78a03c24ea46";
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search?breed_ids=" + breedID,
          { params: { limit: 10, size: "full" } }
        );

        const theid = response.data[0].id;
        const response2 = await axios.get(
          "https://api.thecatapi.com/v1/images/" + theid
        );

        const breedData = response2.data.breeds[0];
        this.adapt = breedData.adaptability;
        this.thename = breedData.name;
        this.description = breedData.description;
        this.temperament = breedData.temperament;
        this.origin = breedData.origin;
        this.allofit = response.data;
        this.i = 0;
        this.slideshow();
      } catch (err) {
        console.log(err);
      }
    },
    slideshow() {
      if (this.i >= this.allofit.length) this.i = 0;
      this.image = this.allofit[this.i];
      this.i++;
    },
  },
  template: `
      <div>
        <h2>{{ thename }}</h2>
        <h4>Origin: {{ origin }}</h4>
        <p><strong>Description:</strong> {{ description }}</p>
        <p><strong>Temperament:</strong> {{ temperament }}</p>
        <p><strong>Adaptability:</strong> {{ adapt }}</p>
        <div class="bar-container">
            <div class="bar-fill" :style="{ width: adapt * 20 + '%'}"></div>
        </div> 
        <img v-if="image" :src="image.url" /><br /><br />
        <button @click="slideshow">Next Image</button>
      </div>
    `,
});

new Vue({
  el: "#bobcat",
  data: {
    selected: "abob",
  },
});
