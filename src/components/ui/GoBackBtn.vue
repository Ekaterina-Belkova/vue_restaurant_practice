<template>
  <div class="gobackbutton"
  @click="goBack">
    ←
  </div>
</template>

<script>
// import { ref } from 'vue'
import router from '@/router'

export default {
  name: 'GoBackBtn',
  components: {
  },
  props: {
  },
  setup () {
    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
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
