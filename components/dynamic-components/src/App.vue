<template>
  <select v-model="componentName">
    <option value="home">Home</option>
    <option value="about">About</option>
  </select>
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
export default {
  name: "App",
  components: {
    Home,
    About,
  },
  data() {
    return {
      componentName: "home",
    };
  },
};
</script>

<style></style>
