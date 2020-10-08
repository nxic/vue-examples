<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ci @modalCalled="parentOpenModal($event)"/>
    <hr>
    <img class="car-image" src="https://image.flaticon.com/icons/png/512/732/732084.png" alt="nike">
    <mrq-txt class="w-min" :repeat="20" :duration="200">
      <img class="car-image m-5" v-for="(item, i) in flatIcons" :key="i" :src="item" alt="nike">
    </mrq-txt>
    <mrq-txt :repeat="20" :duration="30" class="mt-5">
      <span>asfasdfaf</span>
      <span>asfasdfaf</span>
      <span>asfasdfaf</span>
    </mrq-txt>
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
      ],
      flatIcons: [
        'https://www.flaticon.com/svg/static/icons/svg/47/47163.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056315.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056316.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541198.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056385.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228558.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228548.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056325.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228538.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056360.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228512.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228537.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056323.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228552.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056310.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2189/2189389.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056451.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056359.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056454.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056311.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056374.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056346.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541210.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056324.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719011.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2189/2189400.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228491.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228529.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541306.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056378.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228507.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056312.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228533.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228565.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541272.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719021.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228450.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719075.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056319.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719068.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541295.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228497.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541297.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719004.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541264.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719012.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719085.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228509.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541299.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541237.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541182.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228542.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541285.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228504.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541258.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719091.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056306.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228501.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719029.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718944.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718987.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2382/2382391.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541274.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228571.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541240.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718908.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541207.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228461.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228475.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541175.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718998.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541185.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718982.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719036.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719078.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228498.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718986.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718955.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719072.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541179.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541283.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719015.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2719/2719061.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228471.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2382/2382393.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541200.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541204.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541247.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718917.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718925.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2541/2541187.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056354.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718941.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2718/2718996.svg',
        'https://www.flaticon.com/svg/static/icons/svg/3056/3056307.svg',
        'https://www.flaticon.com/svg/static/icons/svg/2228/2228500.svg',
      ],
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
  max-height: 10rem;
}
.w-min {
  max-width: 100vw;
}
</style>
