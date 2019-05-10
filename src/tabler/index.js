import {components} from './components'
import directives from './directives'

const TablerUIPlugin = {
  install: function (Vue) {
    for (let component in components) {
      // register components
      Vue.component(components[component].name, components[component])
    }

    for (let directive in directives) {
      Vue.directive(directive, directives[directive])
    }
  },

  ...components,
  ...directives
}

// vueUse(TablerUIPlugin)

export default TablerUIPlugin
