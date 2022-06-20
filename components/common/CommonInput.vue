<template>
  <div
    class="CommonInput d-flex fd-c"
    :class="{ this_error: options.error }"
    >
    <label v-if="options.label" :for="id">{{ options.label }}</label>
    <div
      :class="[
        'CommonInput__content br-5 d-flex aic',
        {prefix: options.prefix},
        {suffix: options.suffix},
        {focus: focus}
      ]"
      :style="[
        {'max-width': options.width},
        {cursor: !options.prefix && !options.suffix ? 'text' : 'initial'}
      ]"
      v-outside="() => focus = false"
      @click="
        focus = true;
        $refs.CommonInput.focus()
      "
      >
      <span
        :class="[
          'CommonInput__content_prefix fz-16 fw500',
          {'select-none': options.prefix}
        ]"
        v-if="options.prefix"
        >
        {{ options.prefix }}
      </span>
      <input
        ref="CommonInput"
        :class="['fz-16 fw500 w100']"
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
      <span
        :class="[
          'CommonInput__content_suffix fz-16 fw500',
          {'select-none': options.suffix}
        ]"
        v-if="options.suffix"
        >
        {{ options.suffix }}
      </span>
    </div>
    <CommonTransitionY>
      <small v-if="options.error">{{ options.error_message }}</small>
    </CommonTransitionY>
    {{ focus }}
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
        focus: false
      }
    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  .CommonInput {
    &__content {
      border: 2px solid $gray;
      transition: all .3s;
      height: 50px;
      @include adaptive_value('column-gap', 10, 5, 1400, 320);
      @include adaptive_value('padding-right', 20, 15, 1400, 320);
      @include adaptive_value('padding-left', 20, 15, 1400, 320);
      &.prefix {
        @include adaptive_value('padding-left', 15, 10, 1400, 320);
      }
      &.suffix {
        @include adaptive_value('padding-right', 15, 10, 1400, 320);
      }
      &.focus {
        border-color: $blue !important;
      }
      &:hover {
        border-color: $green;
      }
      &_prefix {}
      input {
        height: 100%;
        background-color: transparent;
        &::placeholder {
          @include adaptive_value('font-size', 16, 14, 1400, 320);
        }
      }
      &_suffix {}
    }
    &.this_error {
      .CommonInput__content {
        border-color: $red;
        background-color: rgba($red, .1);
      }
      small {
        color: rgba($red, .7);
      }
    }
  }
</style>
