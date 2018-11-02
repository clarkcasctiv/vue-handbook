<template>
<div>
    <!-- <span>Hello! {{name}}</span> -->
    <!-- <span>{{ Math.Sqrt(16) * Math.random() }}</span> -->
    <!-- <span>Hello! {{name == 'Flavio' ? 'Flavio' : 'Stranger'}}</span> -->
    <!-- <p :style="{'text-decoration': decoration}">Hi!</p> -->
    <!-- <p :style="{textDecoration: decoration}">Hi!</p> -->
    <p :style="styling">Hi!</p>
    <p :class="paragraphClasses">Hi!</p>

</div>
   

</template>

<script>
/* eslint-disable */ 

export default {
  data() {
    return {
      // name: "Pujan"
      // decoration: "underline"
      textDecoration: "underline",
      textDecorationColor: "blue",
      isUnderlined: true,
      isBold: true
    }
  },
  computed: {
    styling() {
      return {
        textDecoration: this.textDecoration,
        textDecorationColor: this.textDecorationColor
      }
    },
    paragraphClasses(){
      return{
        underlined: this.isUnderlined,
        bold: this.isBold
      }
    }
  }
}
</script>
<style>
.underlined {
  text-decoration: underline;
}
.bold {
  font-weight: bold;
}
</style>

