
<template>
  <transition name="fade">
    <div
      :class="[
        `${modalClass} d-flex jcc aic pos-fixed w100 h100 top-0 bottom-0 left-0 right-0 z-100`,
        {theme_dark: isTheme === 'dark'}
      ]"
      @click="closeModal"
      v-if="active"
      >
        <div
          :class="[
            `${modalClass}__content d-flex fd-c`,
            {custom_padding: !$slots.header && !$slots.footer},
            {custom_padding_top: !$slots.header && $slots.footer},
            {custom_padding_bottom: $slots.header && !$slots.footer},
          ]"
          @click.stop
          >
          <section :class="`${modalClass}__content-header d-flex jcsb aic`" v-if="$slots.header">
            <div class="flex-1">
              <slot name="header"></slot>
            </div>
            <span
              class="material-icons black hmc c-p opacity"
              v-if="showCloseModal"
              @click="closeModal"
              >
              close
            </span>
          </section>
          <section :class="`${modalClass}__content-body`">
            <slot name="body"></slot>
          </section>
          <section :class="`${modalClass}__content-footer`" v-if="$slots.footer">
            <slot name="footer"></slot>
          </section>
        </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'CommonModal',
    props: {
      active: {
        type: Boolean,
        default: false,
      },
      isTheme: {
        type: String,
        required: false,
        validator(val) {
          return ["dark",].includes(val);
        },
      },
      showCloseModal: {
        type: Boolean,
        required: false,
      },
      modalClass: {
        type: String,
        default: 'CommonModal',
      },
      data: {
        type: Array,
        default: () => []
      }
    },
    mounted() {
      document.addEventListener('keydown', this.escCloseModal);
      document.addEventListener("click", this.activeModal);
    },
    destroy() {
      document.removeEventListener('keydown', this.escCloseModal);
      document.addEventListener("click", this.activeModal);
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
        document.body.style.overflow = 'auto';
      },
      escCloseModal(e) {
        if (this.active && e.key === 'Escape') {
          this.closeModal();
          document.body.style.overflow = 'auto';
        }
      },
      activeModal() {
        if(this.active){
          document.body.style.overflow = 'hidden';
        }
      }
    },
  };
</script>

<style lang="scss">
  .CommonModal {
    background-color: rgba(0, 0, 0, 0.4);
    &.theme_dark {
      .CommonModal__content {
        background: $black;
        &-body {
          &::-webkit-scrollbar-thumb {
            background: white;
          }
        }
        &-header {
          .material-icons {
            color: white;
          }
        }
      }
    }
    &__content {
      min-width: 280px;
      max-width: 95%;
      max-height: 95%;
      width: 600px;
      background: white;
      box-shadow: 0 0 10px 5px rgb(0 0 0 / 15%);
      transition: transform .3s;
      overflow: hidden;
      @include adaptive_value('border-radius', 15, 15);
      @include adaptive_value('padding-right', 30, 15);
      @include adaptive_value('padding-left', 30, 15);
      &.custom_padding_bottom {
        @include adaptive_value('padding-bottom', 20, 15);
      }
      &.custom_padding_top {
        @include adaptive_value('padding-top', 20, 15);
      }
      &.custom_padding {
        @include adaptive_value('padding-bottom', 20, 15);
        @include adaptive_value('padding-top', 20, 15);
      }
      &-body {
        overflow: auto;
        @include adaptive_value('padding-right', 28, 14);
        &::-webkit-scrollbar {
          background: transparent;
          @include adaptive_value('width', 6, 4);
        }
        &::-webkit-scrollbar-thumb {
          background: $black;
          @include adaptive_value('border-radius', 3, 2);
        }
      }
      &-header {
        @include adaptive_value('padding-top', 20, 15);
        @include adaptive_value('padding-bottom', 20, 15);
        .material-icons {
          @include adaptive_value('font-size', 30, 24);
        }
      }
      &-footer {
        @include adaptive_value('padding-top', 20, 15);
        @include adaptive_value('padding-bottom', 20, 15);
      }
    }
  }
  .fade-enter,
  .fade-leave-active {
    .CommonModal__content {
      transform: scale(1.05);
    }
  }
</style>
