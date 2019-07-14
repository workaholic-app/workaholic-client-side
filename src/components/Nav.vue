<template>
  <nav>
    <div class="wrapper">
      <img class="logo" alt="Logo" src="../assets/logo.png" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    username: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  height: 8vh;
  width: 100%;
  background: #FFF;
}

 .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: calc(100% - 40px);
  margin: 0 auto;

  img {
    height: 40%;
  }
}
</style>