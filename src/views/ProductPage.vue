<template>
  <div class="product">
    <header class="productheader">
      <router-link to="/">
        <GoBackBtn />
      </router-link>

      <div class="productheader_container">
        <div class="productheader__container-items">
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
        <ExitButton />
      </div>
    </header>

    <main class="productmain">
      <div class="">
        динамическая страница
      </div>
    </main>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import GoBackBtn from '@/components/ui/GoBackBtn.vue'
import busketIcon from '@/components/icons/busketIcon.vue'
import ExitButton from '@/components/ui/ExitButton.vue'

export default {
  name: 'ProductPage',
  components: {
    GoBackBtn,
    busketIcon,
    ExitButton
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

.product {
  background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url("../assets/bg-product.jpg");
  background-size: cover;
  height: 100vh;
}
.productheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 60px 0 60px;
}

.productheader_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.productheader__container-items {
  display: flex;
  flex-direction: column;
  color: #fff;
}
</style>
