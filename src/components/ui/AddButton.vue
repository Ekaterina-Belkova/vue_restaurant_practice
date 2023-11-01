<template>
  <div
    :class="{
      'addbutton': true,
      'addbutton__close': close
    }"
    >
    +
  </div>
</template>

<script>

export default {
  name: 'AddButton',
  components: {
  },
  props: {
    close: {
      type: Boolean,
      default: close
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.addbutton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
  font-size: 25px;
}

.addbutton:hover {
  background: #D58C51;
}

.addbutton__close {
  color: #D58C51;
  border: 2px solid #D58C51;
  transform: rotate(45deg);
}
</style>
