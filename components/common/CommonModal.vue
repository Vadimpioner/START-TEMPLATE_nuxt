<template>
    <transition name="fade">
        <div :class="modalClass" v-if="active">
            <div :class="`${modalClass}__overlay`" @click="closeModal">
                <div :class="`${modalClass}__container`">
                    <div
                        :class="`${modalClass}__content`"
                        @click.stop
                        >
                        <section :class="`${modalClass}__header`" v-if="$slots.header">
                            <slot name="header"></slot>
                            <span
                                class="material-icons black fz-28 fw600 c-p"
                                v-if="showCloseModal"
                                @click="closeModal"
                                >
                                close
                            </span>
                        </section>

                        <section :class="`${modalClass}__body`">
                            <slot name="body"></slot>
                        </section>

                        <section :class="`${modalClass}__footer`" v-if="$slots.footer">
                            <slot name="footer"></slot>
                        </section>
                    </div>
                </div>
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
            modalClass: {
                type: String,
                default: 'CommonModal',
            },
            showModal: {
                type: Boolean,
                required: false
            },
            showCloseModal: {
                type: Boolean,
                required: false,
            },
            modalData: {
                type: Array,
                default() {
                    return []
                }
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
        &__overlay {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
            background-color: rgba(0, 0, 0, 0.4);
        }
        &__container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            align-items: center;
            justify-content: center;
            display: flex;
        }

        &__content {
            min-width: 280px;
            max-width: 90%;
            max-height: 90%;
            width: 600px;
            margin: auto;
            display: flex;
            flex-flow: column;
            overflow: hidden;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background: $black;
            box-shadow: 0 0 10px 5px rgb(0 0 0 / 15%);
            transition: transform .3s;
            @include adaptive_value('border-radius', 15, 10, 1400, 320);
            @include adaptive_value('padding-top', 60, 20, 1400, 320);
            @include adaptive_value('padding-bottom', 60, 20, 1400, 320);
        }

        &__header {
        }

        &__body {
            overflow: auto;
            padding: 5px 0;
            @include adaptive_value('padding-right', 60, 20, 1400, 320);
            @include adaptive_value('padding-left', 60, 20, 1400, 320);
            &::-webkit-scrollbar {
                @include adaptive_value('width', 30, 16, 1400, 320);
                @include adaptive_value('height', 30, 16, 1400, 320);
            }
            &::-webkit-scrollbar-track {
                background: $black;
            }
            &::-webkit-scrollbar-thumb {
                background: gray;
                border-color: $black;
                border-style: solid;
                @include adaptive_value('border-radius', 30, 16, 1400, 320);
                @include adaptive_value('border-width', 12, 6, 1400, 320);
            }
        }

        &__footer {
        }
    }
</style>
