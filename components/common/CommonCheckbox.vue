<template>
  <div class="CommonCheckbox">
    <el-checkbox-group
      v-model="CommonCheckbox"
      class="d-flex c-gap-20"
      >
      <el-checkbox
        v-for="item in data"
        :key="item"
        :style="{'background-color': circle ? item : null}"
        :class="{circle: circle}"
        :label="item"
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
      circle: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        CommonCheckbox: [],
      }
    },
    watch: {
      CommonCheckbox(val) {
        this.$emit('update', val)
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .CommonCheckbox {
    ::v-deep {
      .el-checkbox {
        margin-right: 0;
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
        &__input {
          &.is-focus {
            .el-checkbox__inner {
              border-color: white;
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
        &-group {}
      }
      .circle {
        border-radius: 50%;
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
            &::after {
              left: 6px;
              @include value_adaptive(height, 11, 10);
            }
          }
        }
        .el-checkbox__label, .el-checkbox__inner {
          display: none;
        }
      }
    }
  }
</style>
