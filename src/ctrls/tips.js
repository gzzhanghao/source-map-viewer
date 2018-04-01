const TIMEOUT = 3000

export default {

  data() {
    return {

      type: 'suc',

      msg: null,

      display: false,
    }
  },

  methods: {

    suc(msg) {
      this.show('suc', msg)
    },

    err(msg) {
      this.show('err', msg)
    },

    show(type, msg) {
      this.type = type
      this.msg = msg
      this.display = true

      setTimeout(() => {
        this.hide()
      }, TIMEOUT)
    },

    hide() {
      this.display = false
    },
  },
}
