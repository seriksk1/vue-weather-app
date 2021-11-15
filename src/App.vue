<template>
  <div class="app__wrap">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

*:focus-visible {
  outline: none;
}

#app {
  width: 100%;
  height: 100vh;
  background: url("https://i.pinimg.com/originals/23/ec/72/23ec7284bbf871f9e33db879573ab2d3.jpg");
  background-size: cover;
}

.app__wrap {
  padding: 50px 0;
}

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
</style>
