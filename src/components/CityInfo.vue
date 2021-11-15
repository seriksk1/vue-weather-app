<template>
  <div class="container">
    <WeatherTable v-if="cityWeather" :cityWeather="cityWeather" />
    <div v-else>NOT FOUND</div>
  </div>
</template>

<script>
import axios from "axios";
import WeatherTable from "./WeatherTable.vue";

export default {
  name: "CityInfo",
  props: {
    cityName: String,
  },
  components: {
    WeatherTable,
  },
  data: function () {
    return {
      API_KEY: "ff9d437b8a5c1fdf6bc59832839e29b8",
      cityWeather: null,
    };
  },
  mounted: async function () {
    await this.fetchWeather();
  },
  unmounted: function () {
    this.cityWeather = null;
  },
  updated: async function () {},
  methods: {
    fetchWeather: async function () {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${this.API_KEY}`
      );
      this.cityWeather = data;
    },
  },
};
</script>

<style scoped></style>
