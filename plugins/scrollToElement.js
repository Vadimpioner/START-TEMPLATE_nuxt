import Vue from 'vue'

Vue.prototype.$scrollToElement = (el, position = 'start') => setTimeout(function() {document.querySelector(el).scrollIntoView(
  {
    behavior: 'smooth',
    block: position
  })}, 100)
