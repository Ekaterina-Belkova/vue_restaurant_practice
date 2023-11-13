<template>
  <form class="form" @submit.prevent="onSubmitForm">
    <span class="form__switch" @click.prevent="AuthReg()">
      {{ formReg === 'reg' ? 'Зарегистрироваться' : 'Авторизоваться' }}
    </span>

    <h1 class="form__title">
      {{ formReg === 'reg' ? 'Вход' : 'Регистрация' }}
    </h1>

    <BaseInput
      placeholder-input="логин"
      type-input="text"
      :error-message="emailMessage"
      @input-change="onInputChange"
      @blur-input="onBlur"
    />

    <BaseInput
      placeholder-input="пароль"
      type-input="password"
      :error-message="passwordMessage"
      @input-change="onInputChange"
      @blur-input="onBlur"
    />

    <div class="form__footer">
      <input class="form__checkbox" type="checkbox" name="check">
      <span class="form__text">
        Я согласен получать обновления на почту
      </span>
    </div>

    <!-- <span class="form__error">
      Логин или пароль неверен
    </span> -->

    <!-- <router-link to="/"> -->
      <BaseRectangleButton
      type-btn="submit"
      :text-btn="formReg === 'reg' ? 'Войти' : 'Зарегистрироваться'"/>
    <!-- </router-link> -->
  </form>
</template>

<script>
import { ref, computed } from 'vue'

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

    const emailMessage = ref('')
    const passwordMessage = ref('')

    const formReg = ref('reg')

    const AuthReg = () => {
      // formReg.value = !formReg.value
      if (formReg.value === 'reg') {
        formReg.value = 'auth'
      } else {
        formReg.value = 'reg'
      }
    }

    const onInputChange = (event) => {
      console.log(event.target.type)
      if (event.target.type === 'text') {
        emailValue.value = event.target.value
      } else if (event.target.type === 'password') {
        passwordValue.value = event.target.value
      }
    }

    const ValidForm = computed(() => {
      if (emailValue.value.trim() === '') {
        return false
      } else {
        return true
      }
    })

    const onBlur = (e) => {
      console.log('e:', e)
      if (e.target.type === '') {
        if (e.target.type === 'text') {
          emailMessage.value = 'поле не должно быть пустым'
        } else if (e.target.type === 'password') {
          passwordMessage.value = 'поле не должно быть пустым'
        }
      } else {
        if (e.target.type === 'text') {
          emailMessage.value = ''
        } else if (e.target.type === 'password') {
          passwordMessage.value = ''
        }
      }
    }

    const onSubmitForm = (event) => {
      console.log(event)
      if (ValidForm.value) {
        console.log('отправка на сервер произошла')
        emailMessage.value = ''
      } else {
        emailMessage.value = 'поле не должно быть пустым'
      }
    }

    return {
      emailValue,
      passwordValue,
      formReg,
      AuthReg,
      onInputChange,
      onSubmitForm,
      emailMessage,
      passwordMessage,
      onBlur
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
