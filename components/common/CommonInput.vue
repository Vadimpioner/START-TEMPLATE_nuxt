<template>
  <div
    class="CommonInput d-flex fd-c"
    :class="{ this_error: options.error }"
    >
    <label v-if="options.label" :for="id">{{options.label}}</label>
    <input
      :style="[{'max-width': options.width}]"
      :class="['br-5 fz-16 fw500']"
      :autoFocus="options.autoFocus"
      :type="options.type"
      :required="options.required"
      :maxlength="options.maxlength"
      :placeholder="options.placeholder"
      :disabled="options.disabled"
      :value="value"
      :id="id"
      @input="$emit('input', $event.target.value)"
    />
    <CommonTransitionY>
      <small v-if="options.error">{{ options.error_message }}</small>
    </CommonTransitionY>
  </div>
</template>

<script>
  export default {
    name: 'CommonInput',
    props: {
      value: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: () => ({
          type: "text",
        })
      },
    },
    data() {
      return {
        id: "input_" + Math.random(),
      }
    },
  }
</script>

<style lang="scss" scoped>
  .CommonInput {
    input {
      border: 2px solid $gray;
      height: 50px;
      transition: all .3s;
      @include adaptive_value('padding-right', 20, 15, 1400, 320);
      @include adaptive_value('padding-left', 20, 15, 1400, 320);
      &::placeholder {
        @include adaptive_value('font-size', 16, 14, 1400, 320);
      }
    }
    &.this_error {
      input {
        border-color: $red;
        background-color: rgba($red, .1);
      }
      small {
        color: rgba($red, .7);
      }
    }
  }
</style>
