<template>
  <div class="v-popup v-popup__open" :class="{'v-popup__open':visible,'v-popup__close':!visible}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "v-popup",
    data() {
      return {}
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      visible(newVal, oldVal) {
        if (newVal) {
          document.querySelector('.v-popup-mask').style.display = 'block';
        } else {
          setTimeout(() => {
            document.querySelector('.v-popup-mask').style.display = 'none';
          }, 300);
        }
      }
    },
    methods: {
      createPopupMask() {
        let hasMaskDom = document.querySelector('.v-popup-mask');
        if (!!hasMaskDom) {
          let maskDomId = hasMaskDom.getAttribute('data-mask-id');
          maskDom.setAttribute('data-mask-id', ++maskDomId);
        } else {
          let maskDomId = 0;
          let maskDom = document.createElement('div');
          maskDom.setAttribute('data-mask-id', maskDomId);
          maskDom.classList.add('v-popup-mask');
          maskDom.addEventListener('touchmove', e => {
            e.preventDefault();
            e.stopPropagation();
          });
          maskDom.addEventListener('click', e => {
            this.closePopup();
          }, false);
          document.body.appendChild(maskDom);
        }
      },
      closePopup() {
        this.$emit('update:visible', false)
      }
    },
    mounted() {
      this.createPopupMask();
    }
  }
</script>

<style lang="scss">
  .v-popup {
    position: fixed;
    z-index: 2000;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    transform: translate3d(0, 100%, 0);
    height: auto;
    top: auto;
    font-size: 0.28rem;
    overflow: hidden;
  }

  .v-popup__open {
    transform: translate3d(0, 0, 0);
    transition: all .3s ease-in-out;
  }

  .v-popup__close {
    transform: translate3d(0, 100%, 0);
    transition: all .3s ease-in-out;
  }

  /*popup-mask*/
  .v-popup-mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 200;
  }

  .v-popup-mask__show {
    display: block;
  }

  .v-popup-mask__hide {
    display: none;
  }
</style>
