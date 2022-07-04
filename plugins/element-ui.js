import Vue from 'vue';
import { Message, MessageBox, Loading } from 'element-ui'
export default () => {
  Vue.use(Loading.directive);
  Vue.component('ElSwitch', () => import('element-ui/lib/switch'))
  Vue.component('ElSelect', () => import('element-ui/lib/select'))
  Vue.component('ElOption', () => import('element-ui/lib/option'))
  Vue.component('ElCheckbox', () => import('element-ui/lib/checkbox'))
  Vue.component('ElCheckboxGroup', () => import('element-ui/lib/checkbox-group'))
  Vue.prototype.$message = Message
  Vue.prototype.$confirm = MessageBox.confirm
}
