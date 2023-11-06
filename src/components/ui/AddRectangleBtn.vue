<template>
  <button class="addrectanglebtn"
  @click="$emit('click-plus')"
  >
    В корзину
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'AddRectangleBtn',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.addrectanglebtn {
  width: 200px;
  height: 42px;
  background: #D58C51;
  border: none;
  color: black;
  font-size: 14px;
}

.addrectanglebtn:hover {
  background: none;
  border: solid 1px #D58C51;
  color: #D58C51;
}
</style>
