<template>
  <form action="" class="form">
    <div class="form__header">
      <span class="form__header-swit">Зарегистрироваться</span>
      <h1 class="form__header-title">
        Заголовок
      </h1>
    </div>
  </form>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'AuthForm',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 9px 20px 34px;
  background: #FFF;
}
</style>
