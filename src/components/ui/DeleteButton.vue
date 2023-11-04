<template>
  <div class="deletebutton">
    +
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'DeleteButton',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

.deletebutton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 25px;
  color: #D58C51;
  border: 2px solid #D58C51;
  transform: rotate(45deg);
  cursor: pointer;
}

</style>
