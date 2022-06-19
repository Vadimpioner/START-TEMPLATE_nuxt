<template>
  <header class="Header d-flex jcsb">
    <span class="fz-12">{{ $tc('header.title', 2) }}</span>
    <div>
      <button
        @click="$router.push({path: switchLocalePath('en')})"
        >
        English
      </button>
      <button
        @click="$router.push({path: switchLocalePath('ru')})"
        >
        Русский
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Header {

  }
</style>
