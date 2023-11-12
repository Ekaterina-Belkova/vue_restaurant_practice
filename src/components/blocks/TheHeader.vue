<template>
  <header class="header">
    <h2 class="header__title">
      НАША ПРОДУКЦИЯ
    </h2>

    <div class="header__basket">
      <div class="header__basket-items">
        <span class="items">
          {{ basketProducts.length }} товара
        </span>
        <span class="items">
          на сумму {{ basketSum }} ₽
        </span>
      </div>

      <router-link to="/basket">
        <busketIcon />
      </router-link>

      <router-link to="/auth">
        <BaseRectangleButton text-btn="Выйти" revers/>
      </router-link>
    </div>

  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import busketIcon from '@/components/icons/busketIcon.vue'
import BaseRectangleButton from '@/components/ui/BaseRectangleButton.vue'

export default {
  name: 'TheHeader',
  components: {
    busketIcon,
    BaseRectangleButton
  },
  props: {
  },
  setup () {
    const store = useStore()

    const basketProducts = computed(() => {
      return store.getters.getBasketProducts
    })

    const basketSum = computed(() => {
      let sum = 0
      basketProducts.value.forEach(elements => {
        sum += elements.price
      })
      return sum
    })

    return {
      basketProducts,
      basketSum
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
}

.header__title {
  color: #FFF;
  font-size: 31px;
  font-weight: 700;
}

.header__basket {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.items {
  display: flex;
  justify-content: flex-end;
  color: #FFF;
  text-align: right;
  font-size: 17px;
  font-weight: 500;
  }

</style>
