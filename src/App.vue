<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ci @modalCalled="parentOpenModal($event)"/>
    <hr>
    <carousel class="w-min">
      <span><img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike"></span>
      <span><img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike"></span>
      <span><img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike"></span>
      <span><img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike"></span>
      <span><img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike"></span>
      <span><img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike"></span>
      <span><img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike"></span>
      <span><img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike"></span>
    </carousel>
    <hr>
    <button @click.prevent="irsenDataXaray">irsenDataXaray</button>
    <div v-for="(color, i) in colors" :key="i">
      <div :style="`background-color:${color}`" style="border: 1px solid; margin: 10px; padding: 20px; height: 50px">{{ color }}</div>

    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    'ci': HelloWorld
  },
  data() {
    return {
      pass: {
        pasProp: new Date(),
        pasProp1: 'string',
      },
      irsenData: {},
      colors: [
        "#000000",
        "#FF5555",
        "#50FA7B",
        "#F1FA8C",
        "#BD93F9",
        "#FF79C6",
        "#8BE9FD",
        "#4D4D4D",
        "#FF6E67",
        "#5AF78E",
        "#F4F99D",
        "#CAA9FA",
        "#FF92D0",
        "#9AEDFE",
        "#E6E6E6",
      ]
    }
  },
  methods: {
    parentOpenModal(params) {
      console.log(JSON.stringify(params));
      this.irsenData = {...params}; // spread
    },
    irsenDataXaray() {
      console.log(JSON.stringify(this.irsenData));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.car-image {
  max-height: 4rem;
}
.w-min {
  max-width: 300px;
}
</style>
