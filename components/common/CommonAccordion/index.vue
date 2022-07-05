<template>
  <div :class="['CommonAccordion pos-r d-flex fd-c']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CommonAccordion',
    props: {},
    methods: {
    },
    data() {
      return {
        Accordion: {
          count: 0,
          active: null,
        },
      };
    },
    provide() {
      return { Accordion: this.Accordion };
    },
  };
</script>

<style lang="scss" scoped>
  .CommonAccordion {
    gap: 15px;
  }
</style>
