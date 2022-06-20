<template>
  <main>
    {{ $t('index.title') }}
    <button @click="test = !test">Click</button>
    <CommonInput
      v-model="content.name"
      :options="{
        label: 'test',
        error: test,
        width: '300px',
        placeholder: 'placeholder',
        error_message: 'error_message',
      }"
    />
    <CommonInput
      v-model="content.age"
    />
  </main>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        content: {
          name: null,
          age: null
        },
        test: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .Index {

  }
</style>
