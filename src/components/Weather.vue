<template>
  <div class="container">
    <div class="column">
      <h4 class="title">Додавання міста</h4>
      <p class="subtitle">Введіть назву міста:</p>
      <input class="input" type="text" v-model.lazy="addCityName" />
      <button @click="addCity" class="button">Додати</button>
    </div>

    <div class="column">
      <h4 class="title">Вибір міста</h4>
      <p class="subtitle">Оберіть місто:</p>
      <select class="input" name="cities" v-model="selectedCity">
        <option :key="index" v-for="(city, index) in cities" :value="city">
          {{ city }}
        </option>
      </select>
      <button @click="redirectToCity" class="button">Погода</button>
    </div>
  </div>

  <div v-if="geoCityWeather" class="container">
    <WeatherTable :cityWeather="geoCityWeather" />
  </div>
</template>

<script>
import axios from "axios";
import WeatherTable from "./WeatherTable.vue";

export default {
  name: "Weather",
  components: {
    WeatherTable,
  },
  data: function () {
    return {
      API_KEY: "ff9d437b8a5c1fdf6bc59832839e29b8",
      addCityName: "",
      cities: JSON.parse(localStorage.getItem("cities")) || [],
      geoCityWeather: null,
      selectedCity: "",
    };
  },
  mounted: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.fetchWeatherByPos(position);
      });
    }
  },
  methods: {
    fetchWeather: async function () {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.addCityName}&units=metric&appid=${this.API_KEY}`
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    fetchWeatherByPos: async function (pos) {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&cnt=1&appid=${this.API_KEY}`
        );
        this.geoCityWeather = data.list[0];
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    addCity: async function () {
      this.cities.push(this.addCityName);
      localStorage.setItem("cities", JSON.stringify(this.cities));
      console.log(this.cities);
      this.addCityName = "";
    },
    redirectToCity: function () {
      this.$router.push(`/weather/${this.selectedCity}`);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 95%;
  max-width: 1200px;
  padding: 40px;
  margin: 0 auto 40px auto;
  background: #15041fa1;
  color: #fff;
}

.column {
  display: flex;
  flex-direction: column;
  margin: 0 5%;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.subtitle {
  color: darkgrey;
  margin-bottom: 10px;
}

.input {
  min-width: 180px;
  border: none;
  border-radius: 4px;
  padding: 8px 10px;
  margin-bottom: 15px;
}

select option {
  color: #000;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3b6fffd5;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
}

.button:hover {
  background-color: #3b6fff9a;
  box-shadow: 0px 2px 11px 2px #d21eff8c;
}
</style>
