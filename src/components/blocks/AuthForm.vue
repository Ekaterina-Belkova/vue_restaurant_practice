<template>
  <form action="" class="form">
    <span class="form__switch">
      Зарегистрироваться
    </span>

    <h1 class="form__title">
      Вход
    </h1>

    <BaseInput
      type-input="text"
      error-message="Поле не должно быть пустым"
      @input-change="onInputChange"
    />
    <!-- {{ emailValue }} -->

    <BaseInput
      type-input="password"
      error-message="Поле не должно быть пустым"
      @input-change="onInputChange"
    />
    <!-- {{ passwordValue }} -->

    <div class="form__footer">
      <input class="form__checkbox" type="checkbox" name="check">
      <span class="form__text">
        Я согласен получать обновления на почту
      </span>
    </div>

    <span class="form__error">
      Логин или пароль неверен
    </span>

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

.form__switch {
  display: flex;
  align-self: flex-end;
  color: #D58C51;
  text-align: right;
  font-size: 11px;
  font-weight: 300;
  text-decoration-line: underline;
  cursor: pointer;
}

.form__title {
  padding-top: 15px;
  color: #161516;
  font-size: 31px;
  font-weight: 700;
  text-transform: uppercase;
}

.form__footer {
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 10px;
}
.form__checkbox {
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  // vertical-align: middle;
  border: 1px solid #D58C51;
  appearance: none;
  // -webkit-appearance: none;
  cursor: pointer;
}
.form__checkbox:checked {
    background-color: #D58C51;
}

.form__text {
  color: #301411;
  font-size: 11px;
  font-weight: 300;
}

.form__error {
  color: #FF0B0B;
  font-size: 8px;
  font-weight: 300;
}
</style>
