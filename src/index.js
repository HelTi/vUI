/**
 * Created by helti on 2018/5/10.
 */
import {VPopup} from './component/popup'
import {vMessageBox} from './component/messageBox'
import {VLoading} from './component/loading'


const install = (Vue) =>{
  Vue.component(VPopup.name,VPopup)
  Vue.component(vMessageBox.name,vMessageBox)
  Vue.component(VLoading.name,VLoading)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  VPopup,
  vMessageBox,
  VLoading
}
