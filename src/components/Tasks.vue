<template>
  <div class="card tasks">
    <p class="card-title">Tasks</p>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  methods: {
     newTask() {
       this.$store
        .dispatch('addNewTask', {
          taskContent:"Hello world", 
          checked: false
         });
       console.log("added new task");
     }
  },
  mounted() {
    this.newTask();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tasks {
  background: #fff;
}
</style>