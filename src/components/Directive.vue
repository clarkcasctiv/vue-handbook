<template>
    <div>
        <span v-text="name"></span><br>
        <span v-once>{{name}}</span>
        <span v-html="html"></span>
        <a :href="url">{{ linkText }}</a><br>
        <input v-model="message" placeholder="Enter A Message">
        <p>Message is {{ message }}</p>

        <p v-if="showThis">Hey!</p>
        <!-- v-if has higher toggle costs and v-show has higher render cost -->
        <p v-show="showThis">Hey!</p>

        <ul>
            <li v-for="item in items" v-bind:key="item.id">{{ item.name }}</li>
        </ul>

      

        <select v-model="selected">
            <option disabled value="" >Choose A Fruit</option>
            <option>Apple</option>
            <option>Banana</option>
            <option>StrawBerry</option>
        </select>
        <span> Selected: {{ selected }}</span>

    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Pujan",
      html: "<h1>Hello!</h1>",
      url: "www.google.com",
      linkText: "Click Here!",
      message: "Message",
      selected: " ",
      showThis: true,
      counter: 0,
      items: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Mango" }
      ]
    };
  }
};
</script>

<style>
</style>
