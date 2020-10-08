import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'
import MarqueeText from 'vue-marquee-text-component'

Vue.use(VueCarousel);
Vue.component('mrq-txt', MarqueeText);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
