<template>
  <button class="loginbutton">
    Войти
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'LoginButton',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.loginbutton {
  width: 200px;
  height: 42px;
  background: #D58C51;
  border: none;
  color: black;
  font-size: 14px;
}

.loginbutton:hover {
  background: none;
  border: solid 1px #D58C51;
  color: #D58C51;
}
</style>
