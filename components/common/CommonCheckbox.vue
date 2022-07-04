<template>
  <div class="CommonCheckbox">
    <el-checkbox
      v-model="checkbox"
      :indeterminate="isIndeterminate"
      @change="getAll"
      >
      Check all
    </el-checkbox>
    <el-checkbox-group
      v-model="checkboxGroup"
      class="d-flex c-gap-20"
      >
      <el-checkbox
        @change="checkboxChange"
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
        checkbox: [],
        checkboxGroup: [],
        isIndeterminate: false
      }
    },
    watch: {
      checkboxGroup(val) {
        this.$emit('update', val)
      }
    },
    methods: {
      getAll(val) {
        this.checked = true
        this.checkboxGroup = val ? this.data : []
      },
      checkboxChange(value) {
        let checkedCount = value.length;
        this.checkbox = checkedCount === this.data.length;
        console.log(this.checkbox = checkedCount === this.data.length);
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.data.length;
      }
    }
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
</style>
