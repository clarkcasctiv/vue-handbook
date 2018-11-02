<template>
<div>
      <a @click="handleClick('test')">Click Me!</a>
        <a @click="counter += 1">Increment {{ counter }}</a>
        <Form v-on:submit.prevent="formSubmitted"></Form>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Flavio"
    };
  },
  methods: {
    handleClick: function(value) {
      alert(value);
    }
  }
};
</script>

<style>
</style>
