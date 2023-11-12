<template>
  <button :class="{
    'rectanglebtn': !revers,
    'rectanglebtn_revers': revers
  }">
    {{ textBtn }}
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'BaseRectangleButton',
  components: {
  },
  props: {
    textBtn: {
      type: String,
      default: ''
    },
    revers: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.rectanglebtn {
  width: 200px;
  height: 42px;
  background: #D58C51;
  border: none;
  color: black;
  font-size: 14px;
  cursor: pointer;
}

.rectanglebtn:hover {
  background: none;
  border: solid 1px #D58C51;
  color: #D58C51;
}

.rectanglebtn_revers {
  width: 200px;
  height: 42px;
  background: none;
  border: solid 1px #D58C51;
  color: #D58C51;
  font-size: 14px;
  cursor: pointer;
}

.rectanglebtn_revers:hover {
  background: #D58C51;
  border: none;
  color: black;
}

</style>
