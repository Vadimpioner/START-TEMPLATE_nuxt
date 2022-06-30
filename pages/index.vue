<template>
  <main>
    {{ $t('index.title') }}
    <!-- <button @click="test = !test">Click</button>
    <CommonInput
      v-model="content.name"
      :options="{
        label: 'test',
        error: test,
        width: '300px',
        placeholder: 'placeholder',
        error_message: 'error_message',
      }"
      @reset="content.name = ''"
    />
    <CommonInput
      v-model="content.number"
      @input="content.number = content.number.replace(/[^0-9]/, '')"
      :options="{
        width: '300px',
        placeholder: 'Number',
      }"
      @reset="content.number = ''"
    />
    <CommonInput
      v-model="content.password"
      :options="{
        width: '300px',
        type: 'password',
        placeholder: 'Password'
      }"
    />
    <CommonInput
      v-model="content.phone"
      :options="{
        width: '300px',
        type: 'tel',
        placeholder: 'tel',
        error: test,
        error_message: 'error_message2',
      }"
      @reset="content.phone = ''"
    /> -->
    <div class="test">Text</div>
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
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .test {
    @include adaptive_value('font-size', 30, 20)
  }
  .Index {
  }
</style>
