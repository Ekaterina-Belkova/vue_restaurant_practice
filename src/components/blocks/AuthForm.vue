<template>
  <form action="" class="form">
    <div class="form__header">
      <span class="form__header-switch">
        Зарегистрироваться
      </span>

      <h1 class="form__header-title">
        Вход
      </h1>
    </div>

    <BaseInput
      type-input="text"
      error-message="Поле не должно быть пустым"
      @input-change="onInputChange"
    />
    {{ emailValue }}

    <BaseInput
      type-input="password"
      error-message="Поле не должно быть пустым"
      @input-change="onInputChange"
    />
    {{ passwordValue }}

    <router-link to="/">
    <BaseRectangleButton text-btn="Войти"/>
    </router-link>
  </form>
</template>

<script>
import { ref } from 'vue'

import BaseInput from '@/components/ui/BaseInput.vue'
import BaseRectangleButton from '@/components/ui/BaseRectangleButton.vue'

export default {
  name: 'AuthForm',
  components: {
    BaseInput,
    BaseRectangleButton
  },
  props: {
  },
  setup () {
    const emailValue = ref('')
    const passwordValue = ref('')

    const onInputChange = (event) => {
      console.log(event.target.type)
      if (event.target.type === 'text') {
        emailValue.value = event.target.value
      } else if (event.target.type === 'password') {
        passwordValue.value = event.target.value
      }
    }

    return {
      onInputChange,
      emailValue,
      passwordValue
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 9px 20px 34px;
  width: 460px;
  height: 340px;
  background: #FFF;
}

.form__header {
  gap: 15px;
}

.form__header-switch {
  padding-right: 15px;
  color: #D58C51;
  text-align: right;
  font-size: 11px;
  font-weight: 300;
  text-decoration-line: underline;
  cursor: pointer;
}

.form__header-title {
  padding-top: 15px;
  color: #161516;
  font-size: 31px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
