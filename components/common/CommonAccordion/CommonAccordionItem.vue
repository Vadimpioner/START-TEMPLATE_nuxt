<template>
  <div
    :class="[
      'CommonAccordionItem',
      { active: visible && $slots.content && $slots.trigger },
      { disabled: disabled },
    ]"
    v-if="$slots.content && $slots.trigger"
    >
    <div
      :class="[
        'CommonAccordionItem__trigger select-none c-p',
        { active: visible }
      ]"
      @click="open"
      >
      <slot name="trigger"></slot>
    </div>
    <CommonTransitionY>
      <div
        :class="[
          'CommonAccordionItem__content',
          { active: visible }
        ]"
        v-if="visible"
        >
        <slot name="content"></slot>
      </div>
    </CommonTransitionY>
  </div>
</template>

<script>
  export default {
    name: 'CommonAccordionItem',
    props: {
      disabled: Boolean
    },
    inject: ["Accordion"],
    data() {
      return {
        index: null,
      };
    },
    computed: {
      visible() {
        return this.index == this.Accordion.active;
      },
    },
    methods: {
      open() {
        if (this.visible) this.Accordion.active = null;
        else this.Accordion.active = this.index;
      },
    },
    created() {
      this.index = this.Accordion.count++;
    },
  };
</script>

<style lang="scss" scoped>
  .CommonAccordionItem {
    border: 2px solid $blue;
    &.active {
      padding-bottom: 15px;
    }
    &.disabled {
      pointer-events: none;
      opacity: .7;
    }
    &__trigger {
      padding: 15px;
    }
    &__content {
      &.active {
        padding: 0 15px;
      }
    }
  }
</style>
