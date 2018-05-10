/**
 * Created by helti on 2018/5/10.
 */
import {VPopup} from './component/popup'

const install = (Vue) =>{
  Vue.component(VPopup.name,VPopup)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
