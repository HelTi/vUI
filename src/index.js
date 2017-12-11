import './styles/base.scss'
import { Row } from './components/row'

const install = (Vue) => {
    Vue.component(Row.name, Row)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install
}