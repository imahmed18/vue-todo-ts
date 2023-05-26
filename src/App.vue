<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script lang="ts">
import TodoList from "./components/TodoList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    TodoList,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
