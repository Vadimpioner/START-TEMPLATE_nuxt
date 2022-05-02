<template>
  <main class="Error">
    <section class="d-flex fd-c jcc aic">
        <h1 class="fz-96 white fw600 font_futurademic">{{ title }}</h1>
        <span class="fz-50 white font_futurademic">
          Ошибка: {{ error.statusCode }}
        </span>
        <NuxtLink to="/">
          <common-button
            buttonClass="basic"
            >
            <span class="fz-18 fw600 font_futurademic white">
              На главную
            </span>
          </common-button>
        </NuxtLink>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Error',
    layout: 'error-layout',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    computed: {
      title() {
        if(this.error.statusCode === 404) {
          return 'Страница не найдена'
        }
        if(this.error.statusCode === 500) {
          return 'Ошибка сервера'
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .Error {
    background: $gray;
    .d-flex.fd-c.jcc.aic {
      height: 100vh;
      // .CommonButton__basic {
      //   @include adaptive_value('margin-top', 30, 15, 1400, 320)
      // }
    }
  }
</style>
