<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Template></Template> -->
    <!-- <Directive></Directive> -->
    <!-- <Method></Method> -->
    <Computed></Computed>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Template from "./components/Template";
import Directive from "./components/Directive";
import Method from "./components/Method";
import Computed from "./components/Computed";

export default {
  name: "app",
  components: {
    HelloWorld,
    Template,
    Directive,
    Method,
    Computed
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
