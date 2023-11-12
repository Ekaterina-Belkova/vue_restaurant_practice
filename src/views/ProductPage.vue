<template>
  <div class="product">
    <header class="productheader">
        <GoBackBtn />

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

        <router-link to="/auth">
          <ExitButton />
        </router-link>
      </div>
    </header>

    <main class="productmain">
      <!-- {{ CurrentProduct }} -->

      <div class="productmain__container">
        <div class="productmain__container-img">
          <img :src="CurrentProduct.url" class="productmain__container-img__link"/>
        </div>

        <h2 class="productmain__container-title">
          {{ CurrentProduct.item }}
        </h2>

        <p class="productmain__container-description">
          {{ CurrentProduct.description }}
        </p>

        <div class="productmain__container-footer">
          <span class="productmain__container-footer__price">
            {{ CurrentProduct.price }} ₽
          </span>

          <span class="productmain__container-footer__rectangle">
            <BaseRectangleButton
            :text-btn="checkBasket === 0 ? 'В корзину' : 'Удалить'"
            :revers="checkBasket > 0"
            @click-plus="addCardToBasket(card)"/>

            {{ checkBasket }}
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import GoBackBtn from '@/components/ui/GoBackBtn.vue'
import busketIcon from '@/components/icons/busketIcon.vue'
import ExitButton from '@/components/ui/ExitButton.vue'
import BaseRectangleButton from '@/components/ui/BaseRectangleButton.vue'

export default {
  name: 'ProductPage',
  components: {
    GoBackBtn,
    busketIcon,
    ExitButton,
    BaseRectangleButton
  },
  props: {
  },
  setup () {
    const route = useRoute()
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

    onMounted(() => {
      console.log('route', route)
      store.dispatch('setCurrentProduct', route.params.id)
    })

    const CurrentProduct = computed(() => {
      return store.getters.getCurrentProduct
    })

    const checkBasket = computed(() => {
      const newArr = store.getters.getBasketProducts.filter((item) => {
        return item.id === route.params.id
      })
      console.log('newArr', newArr)
      console.log('store.getters.getBasketProducts', store.getters.getBasketProducts)
      return newArr.length
    })

    const addCardToBasket = (val) => {
      if (checkBasket.value === 0) {
        store.commit('SetPushBasketProducts', val)
      } else {
        store.commit('SetRemoveBasketProducts', val)
      }
    }

    return {
      basketProducts,
      basketSum,
      CurrentProduct,
      addCardToBasket,
      checkBasket
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

.productmain {
  padding-left: 140px;
}

.productmain__container {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

@media screen and (max-width: 1100px) {
    padding-left: 0;
    padding-right: 10vh;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
}

.productmain__container-img {
  grid-area: 1 / 1 / 4 / 2;
  padding-left: 10vh;

  @media screen and (max-width: 1250px) {
    padding-left: 0;
    padding-right: 10vh;
  }
}

.productmain__container-img__link {
  width: 60vh;

  @media screen and (max-width: 1350px) {
    width: 40vh;
  }

  @media screen and (max-width: 1100px) {
    width: 20vh;
  }
}
.productmain__container-title {
  grid-area: 1 / 2 / 2 / 3;
  padding-top: 84px;
  color: #D58C51;
  font-size: 30px;
  font-weight: 500;
}
.productmain__container-description {
  grid-area: 2 / 2 / 3 / 3;
  padding-top: 21px;
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
}
.productmain__container-footer {
  grid-area: 3 / 2 / 4 / 3;
  padding-top: 21px;
}

.productmain__container-footer__price {
  color: #FFF;
  font-size: 23px;
  font-weight: 500;
}

.productmain__container-footer__rectangle {
  padding-left: 100px;
}
</style>
