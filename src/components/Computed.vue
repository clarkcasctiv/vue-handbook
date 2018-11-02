<template>
    <div>
        <p>{{ count }}</p>
        <p>{{ count1() }}</p>
        <p>{{ now }}</p>
        <p>{{ now1() }}</p>
    </div>

</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3]
    };
  },
  computed: {
    count: function() {
      return "The count is " + this.items.length * 10;
    },
    now: function() {
      return Date.now();
    }
  },
  methods: {
    count1: function() {
      return "The count is " + this.items.length * 20;
    },
    now1: function() {
      return Date.now();
    }
  }
};
</script>

<style>
</style>
