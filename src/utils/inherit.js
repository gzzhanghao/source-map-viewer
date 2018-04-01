export default function inherit(optsKey, vmKey) {
  const innerKey = `__inherit_val_${vmKey}`
  const rootKey = `__inherit_root_${vmKey}`

  return {
    install(Vue) {
      Vue.mixin({
        beforeCreate() {
          if (this.$options[optsKey]) {
            this[rootKey] = this
            this[innerKey] = this.$options[optsKey]
          } else {
            this[rootKey] = (this.$parent && this.$parent[rootKey]) || this
          }
        },
      })

      Object.defineProperty(Vue.prototype, vmKey, {
        get() {
          return this[rootKey][innerKey]
        },
      })
    },
  }
}
