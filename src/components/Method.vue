<template>
<div>
      <a @click="handleClick('test')">Click Me!</a><br>
      <a @click="counter += 1">Increment {{ counter }}</a>
      <Form v-on:submit.prevent="formSubmitted"></Form>

      <p>My Name Is {{ name }}</p>
      <button @click="changeName">Change My Name!</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Flavio",
      counter: 0
    };
  },
  methods: {
    handleClick: function(value) {
      alert(value);
    },
    changeName: function() {
      if (this.name == "Flavio") {
        this.name = "Flavius";
      } else {
        this.name = "Flavio";
      }
    }
  },
  watch: {
    name: function(newValue, oldValue) {
      // console.log(this.name);
      console.log(newValue, oldValue);
    }
  }
};
</script>

<style>
</style>
