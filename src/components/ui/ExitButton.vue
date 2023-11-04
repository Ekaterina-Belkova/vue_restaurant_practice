<template>
  <button class="exitbutton">
    Выйти
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'ExitButton',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.exitbutton {
  width: 200px;
  height: 42px;
  background: none;
  border: solid 1px #D58C51;
  color: #D58C51;
  font-size: 14px;
}

.exitbutton:hover {
  color: black;
  background: #D58C51;
  border: none;
}
</style>
