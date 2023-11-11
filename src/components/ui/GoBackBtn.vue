<template>
  <div class="gobackbutton"
  @click="goBack">
    <i class="gg-arrow-left"></i>
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

.gg-arrow-left {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 19px;
  height: 22px
}
.gg-arrow-left::after,
.gg-arrow-left::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  left: 3px
}
.gg-arrow-left::after {
  width: 7px;
  height: 8px;
  border-bottom: 2px solid;
  border-left: 2px solid;
  transform: rotate(45deg);
  bottom: 7px
}
.gg-arrow-left::before {
  width: 15px;
  height: 2px;
  bottom: 10px;
  background: currentColor
}

</style>
