<template>
  <label class="label" for="input">
    <input
      class="input"
      :type="typeInput"
      name="input"
      v-model="InputValue"
      @input="$emit('inputChange', $event)"
    >

    <span class="message">
      {{ errorMessage }}
    </span>
  </label>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'BaseInput',
  components: {
  },
  props: {
    errorMessage: {
      type: String,
      default: ''
    },
    typeInput: {
      type: String,
      default: ''
    }
  },
  setup () {
    const InputValue = ref('')
    return {
      InputValue
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  position: relative;
  padding-bottom: 15px;
  width: 100%;
  height: 39px;
}

.input {
  padding: 9px 0 10px 18px;
  border-radius: 61px;
  border: 1px solid #D58C51;
  width: 100%;
  color: #161516;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
}

.message {
  position: absolute;
  bottom: -10px;
  left: 18px;
  color: #FF0B0B;
  font-size: 8px;
  font-weight: 300;
}
</style>
