import Vue from 'vue'

Vue.prototype.$scrollById = (el) => setTimeout(function() {document.querySelector(el).scrollIntoView(
  {
    behavior: 'smooth'
  })}, 0)
