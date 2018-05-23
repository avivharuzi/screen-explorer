import uppercase from './uppercase'
import capitalize from './capitalize'
import ucwords from './ucwords'
import truncate from './truncate'
import currency from './currency'
import date from './date'

const methods = {
  uppercase,
  capitalize,
  ucwords,
  truncate,
  currency,
  date
}

const filters = {
  install: (Vue) => {
    Object.keys(methods).forEach(key => {
      Vue.filter(key, methods[key])
    })

    Vue.prototype['$filters'] = methods
  }
}

export default filters
