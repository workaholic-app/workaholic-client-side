<template>
  <div id="app">
    <Nav username="Abhinav" />
    <router-view></router-view>
  </div>
</template>

<style>
$text-color: #364c59;

* {
  font-family: "DM Sans", sans-serif;
  //font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background: #ebf0f5;
}

.app {
  width: 100%;
  height: calc(100vh - 8vh);
  position: relative;
}

.card {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 15px;

  p.card-title {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 1.1em;
    font-weight: 600;
    margin: 0;
    color: $text-color;
  }
}
</style>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "app",
  components: {
    Nav
  }
};
</script>
