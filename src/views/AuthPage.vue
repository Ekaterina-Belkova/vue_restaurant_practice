<template>
  <span class="wrapper">
    <AuthForm />
  </span>
</template>

<script>
import AuthForm from '../../src/components/blocks/AuthForm.vue'

export default {
  name: 'AuthPage',
  components: {
    AuthForm
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/background-auth.png');
  background-size: 100% 100%;
  height: 100vh;
}
</style>
