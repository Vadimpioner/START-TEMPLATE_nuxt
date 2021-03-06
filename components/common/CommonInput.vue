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
        {disabled: options.disabled},
        {tel: options.type == 'tel'},
        {focus: focus},
      ]"
      :style="[
        {'max-width': options.width},
        {cursor: !options.prefix && !options.suffix ? 'text' : 'initial'},
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
      <vue-tel-input
        v-if="options.type == 'tel'"
        ref="CommonInput"
        v-model="inputTel"
        validCharactersOnly
        @focus="focusTel()"
        :id="id"
        :inputOptions="{
          placeholder: options.placeholder,
          autofocus: options.autoFocus,
        }"
        @country-changed="setPrefix"
      />
      <input
        v-else
        ref="CommonInput"
        v-mask="options.mask"
        :class="['fz-16 fw500 w100']"
        :autoFocus="options.autoFocus"
        :type="!passwordShow ? options.type : 'text'"
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
      <transition-group
        name="fade"
        tag="div"
        class="d-flex"
        v-if="options.type == 'password' || $listeners.reset"
        >
        <span
          key="text"
          v-if="value && $listeners.reset"
          @click="$emit('reset')"
          class="material-icons-round gray c-p select-none opacity"
          >
          highlight_off
        </span>
        <span
          key="password"
          v-if="value && options.type == 'password'"
          @click="passwordShow = !passwordShow"
          class="material-icons-round gray c-p select-none opacity"
          >
          {{ passwordShow ? 'visibility_off' : 'visibility' }}
        </span>
      </transition-group>
    </div>
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
        focus: false,
        passwordShow: false,
      }
    },
    computed: {
      inputTel: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit("input", val);
        },
      },
    },
    methods: {
      focusTel() {
        setTimeout(() => this.focus = true, 0)
      },
      setPrefix(e) {
        this.inputTel = '';
        this.$emit("input", `+${e?.dialCode}`)
      },
    },
    mounted() {
      // console.log(this.$listeners);
    }
  }
</script>

<style lang="scss" scoped>
  .CommonInput {
    &__content {
      border: 2px solid $gray;
      transition: all .3s;
      height: 50px;
      @include value_adaptive('column-gap', 10, 5);
      @include value_adaptive('padding-right', 20, 15);
      @include value_adaptive('padding-left', 20, 15);
      &.prefix {
        @include value_adaptive('padding-left', 15, 10);
      }
      &.suffix {
        @include value_adaptive('padding-right', 15, 10);
      }
      &.focus {
        border-color: $blue !important;
      }
      &.disabled {
        pointer-events: none;
        opacity: .7;
      }
      &.tel {
        padding-left: 0;
        .vue-tel-input {
          width: 100%;
          height: 100%;
          border: unset;
          box-shadow: unset;
          ::v-deep {
            .vti__dropdown {
              border-right: 1px solid $gray;
              background-color: $gray;
              padding: 0 15px;
              border-radius: 3px 0 0 3px;
              transition: background-color .3s;
              @media(min-width: #{$tablet + 1 + px}) {
                &:hover {
                  background-color: rgba($gray, .7);
                }
              }
              ul {
                height: max-content;
                top: 55px;
                left: -2px;
                border: 2px solid $blue;
                border-radius: 5px;
                @include scroll;
                li {
                  min-height: 40px;
                  padding: 0 15px;
                  display: flex;
                  align-items: center;
                  column-gap: 10px;
                  strong, span {
                    @include value_adaptive('font-size', 16, 14);
                  }
                  span {
                    font-weight: 500;
                    margin: 0;
                  }
                  .vti__flag-wrapper {
                    width: max-content;
                  }
                }
              }
              .vti__selection {
                column-gap: 5px;
                .vti__flag {
                  margin: 0;
                  display: flex;
                  column-gap: 5px;
                }
              }
            }
            .vti__input {
              font-weight: 500;
              background-color: transparent;
              @include value_adaptive('font-size', 16, 14);
            }
          }
        }
      }
      &:hover {
        border-color: $green;
      }
      &_prefix {}
      input {
        height: 100%;
        background-color: transparent;
        &::placeholder {
          @include value_adaptive('font-size', 16, 14);
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
