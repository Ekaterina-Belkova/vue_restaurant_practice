<template>
  <div class="addbutton">
    +
  </div>
</template>

<script>

export default {
  name: 'AddButton',
  components: {
  },
  props: {
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
  border: 2px solid #fff;
  font-size: 25px;
}

.addbutton:hover {
  background: #D58C51;
}
</style>
