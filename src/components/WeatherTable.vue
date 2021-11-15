<template>
  <table>
    <tr>
      <th>{{ cityWeather.name }}</th>
      <th>{{ cityWeather.sys.country }}</th>
      <th>[{{ cityWeather.coord.lat }}; {{ cityWeather.coord.lon }}]</th>
    </tr>
    <tr>
      <td>
        <img
          class="icon"
          src="https://cdn3.iconfinder.com/data/icons/farmer-garden-weather-1/128/_humidity_drops_water_weather-512.png"
          alt=""
        />
      </td>
      <td>humidity</td>
      <td>{{ cityWeather.main.humidity }}%</td>
    </tr>
    <tr>
      <td>
        <img
          class="icon"
          src="https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Temperature-512.png"
          alt=""
        />
      </td>
      <td>temp</td>
      <td>{{ cityWeather.main.temp.toFixed(0) }}</td>
    </tr>
    <tr>
      <td>
        <img
          class="icon"
          :src="`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`"
          alt=""
        />
      </td>
      <td>main</td>
      <td>{{ cityWeather.weather[0].main }}</td>
    </tr>
    <tr>
      <td>
        <img
          class="icon"
          src="https://cdn4.iconfinder.com/data/icons/weather-686/32/hygrometer_barometer_meteorology_pressure-512.png"
          alt=""
        />
      </td>
      <td>pressure</td>
      <td>{{ cityWeather.main.pressure }}</td>
    </tr>
    <tr>
      <td>
        <img
          class="icon"
          src="https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Umbrella-512.png"
          alt=""
        />
      </td>
      <td>description</td>
      <td>{{ cityWeather.weather[0].description }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "WeatherTable",
  props: {
    cityWeather: Object,
  },
};
</script>

<style scoped>
th {
  text-align: left;
  padding: 0 30px 10px;
}

td {
  padding: 0 30px 10px;
}

.icon {
  width: 35px;
  height: 35px;
  background: #cd93ff17;
  border-radius: 50%;
  padding: 5px;
  filter: brightness(4);
}
</style>
