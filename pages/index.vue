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
      v-model="content.number"
      @input="content.number = content.number.replace(/[^0-9]/, '')"
      :options="{
        width: '300px',
        placeholder: 'Number'
      }"
    />
    <CommonInput
      v-model="content.password"
      :options="{
        width: '300px',
        type: 'password',
        placeholder: 'Password'
      }"
    />
    <pre>{{content.phone}}</pre>
    <CommonInput
      v-model="content.phone"
      :options="{
        width: '300px',
        type: 'tel',
        placeholder: 'tel',
        error: test,
        error_message: 'error_message2',

      }"
    />
    <!-- @input="content.phone = content.phone.replace(/[^0-9]/, '')" -->
  </main>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        content: {
          name: null,
          number: null,
          password: null,
          phone: null,
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
