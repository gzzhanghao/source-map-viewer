import Vue from 'vue'

export default class Ctrl {

  constructor(ctrls = {}) {
    for (const [key, val] of Object.entries(ctrls)) {
      this.$register(key, val)
    }
  }

  $register(key, opts) {
    this[key] = new Vue({ ...opts, ctrl: this })
  }
}
