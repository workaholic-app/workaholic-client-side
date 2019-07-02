<template>
  <div id="app">
    <Nav username="Abhinav" />
  </div>
</template>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background: #ebf0f5;
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
