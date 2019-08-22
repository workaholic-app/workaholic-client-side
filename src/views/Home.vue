<template>
  <router-view></router-view>
</template>

<script>
export default {
  beforeMount() {
    this.$router.replace({ path: 'dashboard' });
  }
}
</script>
