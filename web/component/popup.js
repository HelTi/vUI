/**
 * 底部弹框组件
 *
 */
import '../../css/plugin/popup/popup.scss'

const yPopup = {
  template: `
    <div>
    <div class="y-popup-mask" @click="closePopup"></div>
    <div class="y-popup-wrapper">
        <div class="y-popup-content" :class="{'y-popup-show':visible,'y-popup-hide':!visible}">
            <slot></slot>
        </div>
    </div>
    </div>
  `,
  name: "y-popup",
  data() {
    return {}
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch:{
    visible(newVal,odlVal){
       console.log('newVal',newVal);
       if(newVal){
         document.querySelector('.y-popup-mask').style.display = 'block';
         document.querySelector('.y-popup-content').style.display = 'block';
       }else{
         setTimeout(()=>{
           document.querySelector('.y-popup-mask').style.display = 'none';
           document.querySelector('.y-popup-content').style.display = 'none';
         },500);

       }
    }
  },
  methods: {
    closePopup() {
      this.$emit('update:visible', false)
    }
  },
  mounted() {
    console.log(this.visible)
  }
};

export default yPopup;