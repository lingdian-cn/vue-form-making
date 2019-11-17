import Vue from 'vue'
import GenerateForm from './components/Formdesign/GenerateForm.vue'

import './styles/cover_fm.scss'
import './styles/index_fm.scss'

GenerateForm.install = function (Vue) {
  Vue.component(GenerateForm.name, GenerateForm)
}

const components = [
  GenerateForm
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  GenerateForm
}

export default {
  install,
  GenerateForm
}
