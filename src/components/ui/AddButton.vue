<template>
  <div
    :class="{
      'addbutton': true,
      'addbutton_basket': basket
  }">
    +
  </div>
</template>

<script>

export default {
  name: 'AddButton',
  components: {
  },
  props: {
    basket: {
      type: Boolean,
      default: false
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

.addbutton__basket {
  color: #D58C51;
  border: 2px solid #D58C51;
  transform: rotate(45deg);
}

</style>
