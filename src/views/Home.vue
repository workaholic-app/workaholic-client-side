<template>
  <div class="app">
    <div class="dashboard">
      <Tasks></Tasks>
      <div class="col-2">
        <Screentime></Screentime>
        <Activity></Activity>
      </div>
      <div class="col-3">
        <Health></Health>
        <Water></Water>
        <Notes></Notes>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: grid;
  grid-template-columns: calc(30% - 13.3px) calc(40% - 13.3px) calc(
      30% - 13.3px
    );
  grid-column-gap: 20px;
}

.col-2 {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: calc(50% - 10px) calc(50% - 10px);
  grid-row-gap: 20px;
}

.col-3 {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: calc(30% - 13.3px) calc(30% - 13.3px) calc(40% - 13.3px);
  grid-row-gap: 20px;
}
</style>

<script>
// @ is an alias to /src
import Tasks from "@/components/Tasks.vue";
import Screentime from "@/components/Screentime.vue";
import Activity from "@/components/Activity.vue";
import Health from "@/components/Health.vue";
import Water from "@/components/Water.vue";
import Notes from "@/components/Notes.vue";

export default {
  name: "app",
  components: {
    Tasks,
    Screentime,
    Activity,
    Health,
    Water,
    Notes
  }
};
</script>
