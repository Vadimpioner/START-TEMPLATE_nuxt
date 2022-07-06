<template>
  <div class="CommonCheckbox d-flex fd-c r-gap-5">
    <el-checkbox
      v-if="(!options.min && !options.max) ? options.el_name : null"
      v-model="checkbox"
      :class="[
        'wmc opacity',
        {el_circle: options.circle},
        {'el_basic el_basic_all d-flex aic': !options.circle},
        {'is-disabled': is_disabled},
      ]"
      :disabled="options.disabled"
      @change="getAll"
      :checked="options.checked"
      >
      {{ options.el_name }}
    </el-checkbox>
    <el-checkbox-group
      v-if="options.checkbox_group"
      v-model="checkboxGroup"
      :class="[
        'd-flex c-gap-20',
        {'group_circle': options.circle},
        {'group_basic': !options.circle}
      ]"
      :min="options.min"
      :max="options.max"
      :disabled="options.disabled"
      :checked="options.checked"
      >
      <el-checkbox
        v-for="item in data"
        :key="item"
        :style="{'background-color': options.circle ? item : null}"
        :class="[
          'opacity',
          {'circle br-circle': options.circle},
          {'el_basic d-flex aic': !options.circle},
        ]"
        :label="item"
        :disabled="options.disabled"
        @change="selectGroup"
      />
    </el-checkbox-group>
  </div>
</template>

<script>
  export default {
    name: 'CommonCheckbox',
    props: {
      data: {
        type: Array,
      },
      options: {
        type: Object,
        default: () => ({
          checkbox_group: true
        })
      }
    },
    data() {
      return {
        checkbox: [],
        checkboxGroup: [],
      }
    },
    watch: {
      checkboxGroup(val) {
        this.$emit('update', val)
      },
    },
    methods: {
      getAll(val) {
        this.checkboxGroup = val ? this.data : []
      },
      selectGroup(val) {
        this.checkbox = val === this.data.length
      }
    },
    computed: {
      is_disabled() {
        if(this.checkboxGroup.length == this.options.max) return true
      },
    }
  }
</script>

<style lang="scss" scoped>
  .CommonCheckbox {
    ::v-deep {
      .el-checkbox {
        margin-right: 0;
        &__inner {
          width: 16px;
          height: 16px;
          background-color: transparent;
          border-color: rgba(white, .5);
        }
        &__label {
          color: white !important;
        }
      }
      .el_basic {
        .el-checkbox__input {
          display: inline-flex;
        }
        &.is-disabled {
          pointer-events: none;
          opacity: .5;
          .el-checkbox__inner {
            background-color: transparent;
          }
        }
        .is-checked {
          .el-checkbox__inner {
            background-color: white;
            border-color: white;
            &::after {
              border-color: $black;
              height: 8px;
              left: 5px;
            }
          }
        }
        .is-focus {
          .el-checkbox__inner {
            border-color: rgba(white, .5);
          }
        }
      }
      .el_basic_all {
        .is-checked {
          .el-checkbox__inner {
            background-color: transparent;
            border-color: white;
            &::after {
              border-color: white;
            }
          }
        }
      }
      .el_circle {
        .is-checked {
          .el-checkbox__inner {
            background-color: transparent;
            &::after {
              opacity: 1;
              border-color: white;
              @include value_adaptive(top, 4, 2);
              @include value_adaptive(left, 9, 7);
              @include value_adaptive(height, 11, 10);
            }
          }
        }
        &.is-disabled {
          pointer-events: none;
          opacity: .5;
          .el-checkbox__inner {
            background-color: transparent;
          }
        }
        .is-focus, .is-checked {
          .el-checkbox__inner {
            border-color: white;
          }
        }
        .el-checkbox__inner {
          border-color: white;
          display: flex;
          border-radius: 50%;
          @include value_adaptive(min-width, 24, 20);
          @include value_adaptive(min-height, 24, 20);
          &::after {
            @include value_adaptive(top, 4, 2);
            @include value_adaptive(left, 9, 7);
            @include value_adaptive(height, 11, 10);
          }
        }
      }
      .group_circle {
        .circle {
          border: 1px solid transparent;
          transition: border-color .3s;
          @include value_adaptive(min-width, 24, 20);
          @include value_adaptive(min-height, 24, 20);
          &.is-checked {
            border-color: white;
            .el-checkbox__input {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
            .el-checkbox__inner {
              display: flex;
              background-color: unset;
              border: unset;
              opacity: 1;
              &::after {
                left: 6px;
                @include value_adaptive(height, 11, 10);
                border-color: $black;
              }
            }
          }
          &.is-disabled {
            pointer-events: none;
            opacity: .5;
          }
          .el-checkbox__label {
            display: none;
          }
          .el-checkbox__inner {
            opacity: 0;
          }
        }
      }
    }
  }
</style>
