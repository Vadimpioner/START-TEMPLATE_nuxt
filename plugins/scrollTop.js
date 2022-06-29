import Vue from 'vue'

Vue.prototype.$scrollTop = () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
})
