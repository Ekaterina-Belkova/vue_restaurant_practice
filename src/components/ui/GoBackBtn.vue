<template>
  <div class="gobackbutton">
    ←
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'GoBackBtn',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.gobackbutton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: #fff;
  border-radius: 50%;
  border: 2px solid #fff;
  font-size: 11px;
}

.gobackbutton:hover {
  background: #D58C51;
}

</style>
