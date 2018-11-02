<template>
    <p>{{ hello }}</p>
    
</template>

<script>
export default {
  //used in single file component

  //data: function()
  //data: () =>
  data() {
    return {
      hello: "Hello World!"
    };
  }
};
</script>
<style scoped>
p {
  color: blue;
}
</style>
