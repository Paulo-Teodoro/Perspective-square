Vue.createApp({
  data() {
    return {
        perspective: 100,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
    }
  },
  computed: {
    boxStyle() {
        return {
            transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
        } 
    }
  },
  methods: {
    reset() {
        this.perspective = 100
        this.rotateX = 0
        this.rotateY = 0
        this.rotateZ = 0
    },
    copy() {
        const element = document.createElement('textarea')

        element.value = `transform: ${this.boxStyle.transform}`
        element.setAttribute('readonly', '')
        element.style.position = 'absolute'
        element.style.left = '-99999px'

        document.body.appendChild(element)
        element.select()
        document.execCommand('copy')
        document.body.removeChild(element)
    }
  }
}).mount('#app')