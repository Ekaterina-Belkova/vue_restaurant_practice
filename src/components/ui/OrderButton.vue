<template>
  <button class="orderbutton">
    Оформить заказ
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'OrderButton',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.orderbutton {
  width: 200px;
  height: 42px;
  background: #D58C51;
  border: none;
  color: black;
  font-size: 14px;
}

.orderbutton:hover {
  background: none;
  border: solid 1px #D58C51;
  color: #D58C51;
}
</style>
