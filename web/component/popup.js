/**
 * 底部弹框组件
 *
 */
import '../../css/plugin/popup/popup.scss'

const yPopup = {
  template: `
    <div :id="popupId">
    <div class="y-popup-wrapper">
        <div class="y-popup-content" :class="{'y-popup-show':visible,'y-popup-hide':!visible}">
            <div class="y-popup-position">
                <slot></slot>
            </div>
        </div>
    </div>
    </div>
  `,
  name: "y-popup",
  data() {
    return {}
  },
  computed: {
    popupId() {
      return this._uid;
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        document.querySelector('.y-popup-mask').style.display = 'block';
        document.querySelector('.y-popup-content').style.display = 'block';
      } else {
        setTimeout(() => {
          document.querySelector('.y-popup-mask').style.display = 'none';
        document.querySelector('.y-popup-content').style.display = 'none';
      }, 500);
      }
    }
  },
  methods: {
    closePopup() {
      this.$emit('update:visible', false)
    },
    createPopupMask() {
      let hasMaskDom = document.querySelector('.y-popup-mask');
      if (!!hasMaskDom) {
        let maskDomId = hasMaskDom.getAttribute('data-mask-id');
        maskDom.setAttribute('data-mask-id', ++maskDomId);
      } else {
        let maskDomId = 0;
        let maskDom = document.createElement('div');
        maskDom.setAttribute('data-mask-id', maskDomId);
        maskDom.classList.add('y-popup-mask');
        maskDom.addEventListener('touchmove', e => {
          e.preventDefault();
        e.stopPropagation();
      });
        maskDom.addEventListener('click', e => {
          this.closePopup();
      }, false);
        document.body.appendChild(maskDom);
      }
    }
  },
  mounted() {
    this.createPopupMask();
  }
};

export default yPopup;
