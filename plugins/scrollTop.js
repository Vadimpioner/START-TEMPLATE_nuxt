import Vue from 'vue'

Vue.prototype.$scrollTop = (Y = 0, animate = 'smooth') => window.scrollTo({
  top: Y,
  behavior: animate,
})
