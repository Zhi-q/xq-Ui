import Button from './button.vue'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './raido.vue'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './check-group.vue'
import Form from './form'
import FormItem from './form-item'
const components = [Button, Dialog, Input, Checkbox, Radio, RadioGroup, Switch, CheckboxGroup, Form, FormItem]
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
