<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    :style="{pointerEvents: disabled ? 'none' : null}"
    :class="`CommonButton__${buttonClass} d-flex aic jcc br-5 select-none wmc`"
    >
    <span class="fz-20 fw600">
      <slot name="default"></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'CommonButton',
    props: {
      buttonClass: {
        type: String,
        default: 'one',
        validator(val) {
          return ["one", "two", "three", "four"].includes(val);
        },
      },
      disabled: {
        type: Boolean,
        required: false
      }
    }
  }
</script>

<style lang="scss">
  .CommonButton__one,
  .CommonButton__two,
  .CommonButton__three,
  .CommonButton__four {
    border: none;
    transition: all .3s;
    @include adaptive_value('height', 56, 40, 1400, 320);
    @include adaptive_value('padding-right', 20, 15, 1400, 320);
    @include adaptive_value('padding-left', 20, 15, 1400, 320);
    @media(min-width: $tablet + 1px) {
      &:hover {
        transform: scale(1.1);
      }
    }
    &:disabled {
      pointer-events: none;
      background: $gray;
      span {
        color: $white;
      }
    }
  }
  .CommonButton__one {
      background: $blue;
      @media(min-width: $tablet + 1px) {
        &:hover {
          box-shadow: 0px 5px 20px rgba($blue, 0.6);
        }
      }
  }
  .CommonButton__two {
    background: $red;
      @media(min-width: $tablet + 1px) {
          &:hover {
            box-shadow: 0px 5px 10px rgba($red, 0.4);
          }
      }
  }
</style>
