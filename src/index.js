import VueAccessibleSelect from './components/VueAccessibleSelect/VueAccessibleSelect.vue'

import config from './config'

const Plugin = {
  install(app) {
    // Make sure that plugin can be installed only once
    if (this.installed) {
      return
    }

    app.component('VueAccessibleSelect', VueAccessibleSelect)
  },
}

export default Plugin

export { VueAccessibleSelect, config }
