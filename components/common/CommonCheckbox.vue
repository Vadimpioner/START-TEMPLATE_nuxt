<template>
  <div class="CommonCheckbox d-flex fd-c r-gap-5">
    <el-checkbox
      v-if="options.el_name"
      v-model="checkbox"
      :class="[
        'wmc',
        {el_circle: options.circle},
        {'is-disabled': checkboxGroup.length == options.max},
      ]"
      :disabled="options.disabled"
      @change="getAll"
      >
      {{ options.el_name }}
    </el-checkbox>
    <el-checkbox-group
      v-model="checkboxGroup"
      class="d-flex c-gap-20"
      :min="options.min"
      :max="options.max"
      :disabled="options.disabled"
      >
      <el-checkbox
        v-for="item in data"
        :key="item"
        :style="{'background-color': options.circle ? item : null}"
        :class="[{'circle br-circle': options.circle}]"
        :label="item"
        @change="(val) => checkbox = val === data.length"
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
      }
    },
    methods: {
      getAll(val) {
        this.checkboxGroup = val ? this.data : []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .CommonCheckbox {
    ::v-deep {
      .el-checkbox {
        margin-right: 0;
        &.is-checked {
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
        &.el_circle {
          .is-checked {
            .el-checkbox__inner {
              background-color: transparent;
              &::after {
                opacity: 1;
              }
            }
          }
          .is-disabled {
            .el-checkbox__inner {
              background-color: transparent;
            }
          }
          .el-checkbox__inner {
            display: flex;
            border-radius: 50%;
            border: 1px solid white;
            transition: border-color .3s;
            @include value_adaptive(min-width, 24, 20);
            @include value_adaptive(min-height, 24, 20);
            &::after {
              border-color: white;
              @include value_adaptive(top, 4, 3);
              @include value_adaptive(left, 9, 7);
              @include value_adaptive(height, 11, 10);
            }
          }
        }
        &.is-disabled {
          pointer-events: none;
          opacity: .5;
        }
        &__input {
          &.is-focus {
            .el-checkbox__inner {
              border-color: rgba(white, .5);
            }
          }
        }
        &__inner {
          width: 16px;
          height: 16px;
          background-color: transparent;
          border-color: rgba(white, .5);
        }
        &__label {
          color: white !important;
        }
        &-group {
          .circle {
            border: 1px solid transparent;
            transition: border-color .3s;
            @include value_adaptive(width, 24, 20);
            @include value_adaptive(height, 24, 20);
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
                }
              }
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
  }
</style>
