<template>
  <header class="basketheader">
    <router-link to="/">
      <GoBackBtn />
    </router-link>

    <h2 class="basketheader__title">
      Корзина с выбранными товарами
    </h2>
  </header>

  <main class="basketmain">
    <!-- {{ basketProducts }} -->
    <CardProduct
      v-for="(card, idx) in basketProducts"
      :key="idx"
      :urlImg="card.url"
      :item="card.item"
      :description="card.description"
      :price="card.price"
      basket
      @click-delete="deleteCardfromBasket(card.idx)"
    ></CardProduct>
  </main>

  <footer class="basketfooter">
    <hr class="basketfooter__line">

    <div class="basketfooter__container">
      <span class="basketfooter__container-total">
        <h3 class="bbasketfooter__container-total__title">
          Заказ на сумму:
        </h3>
        <h3 class="basketfooter__container-total__title">
          {{ basketSum }} ₽
        </h3>
      </span>
      <OrderButton />
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import GoBackBtn from '@/components/ui/GoBackBtn.vue'
import OrderButton from '@/components/ui/OrderButton.vue'
import CardProduct from '@/components/elements/CardProduct'

export default {
  name: 'BasketPage',
  components: {
    GoBackBtn,
    OrderButton,
    CardProduct
  },
  props: {
  },
  setup () {
    const store = useStore()

    const basketProducts = computed(() => {
      return store.getters.getBasketProducts
    })

    const deleteCardfromBasket = (id) => {
      console.log('deleteCardfromBasket', deleteCardfromBasket)
      store.commit('SetRemoveBasket', id)
    }

    const basketSum = computed(() => {
      let sum = 0
      basketProducts.value.forEach(elements => {
        sum += elements.price
      })
      return sum
    })

    return {
      basketProducts,
      deleteCardfromBasket,
      basketSum
    }
  }
}
</script>

<style lang="scss" scoped>
.basketheader {
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: 15vw;
}
.basketheader__title {
  padding-left: 63px;
  color: #fff;
  text-transform: uppercase;
  font-size: 31px;
  font-weight: 700;
}

.basketmain {
  padding: 0 15vw 0 15vw;
}

.basketfooter {
  position: fixed;
  z-index: 2;
  bottom: 0;
  background-color: #161516;
}

.basketfooter__line {
  color: #D58C51;
  width: 100vw;
  height: 1px;
}

.basketfooter__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15vw;
}

.basketfooter__container-total {
  display:flex;
  align-items: baseline;
  padding: 28px 0 35px 15vw;
  color: #fff;
  gap: 16px;
}

.basketfooter__container-total__title {
  text-transform: uppercase;
  font-size: 21px;
  font-weight: 400;
  color: #D58C51;
}
</style>
