<template>
  <main class="main">
    <div class="preloader" v-if="preloader">
      <span class="loader"></span>
    </div>
    <CardProduct
      v-for="(card, idx) in products"
      :key="idx"
      :urlImg="card.url"
      :item="card.item"
      :description="card.description"
      :price="card.price"
      @click="goTo(card.id)"
      @click-plus="addCardtoBasket(card)"
    ></CardProduct>
  </main>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'

import CardProduct from '@/components/elements/CardProduct'
// import { products } from '../../../src/ProductsData.js'

export default {
  name: 'TheMain',
  components: {
    CardProduct
  },
  props: {
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const preloader = ref(true)

    // const products = ref([
    //   {
    //     id: 1,
    //     url: require('@/assets/item-one.png'),
    //     item: 'Устрицы по рокфеллеровски',
    //     description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
    //     price: 2700
    //   },
    //   {
    //     id: 2,
    //     url: require('@/assets/item-two.png'),
    //     item: 'Свиные ребрышки на гриле с зеленью',
    //     description: 'Не следует, однако забывать, что реализация намеченных плановых',
    //     price: 1600
    //   },
    //   {
    //     id: 3,
    //     url: require('@/assets/item-three.png'),
    //     item: 'Креветки по-королевски в лимонном соке',
    //     description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
    //     price: 1820
    //   },
    //   {
    //     id: 4,
    //     url: require('@/assets/item-one.png'),
    //     item: 'Устрицы по рокфеллеровски',
    //     description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
    //     price: 2700
    //   },
    //   {
    //     id: 5,
    //     url: require('@/assets/item-one.png'),
    //     item: 'Устрицы по рокфеллеровски',
    //     description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
    //     price: 2700
    //   },
    //   {
    //     id: 6,
    //     url: require('@/assets/item-two.png'),
    //     item: 'Свиные ребрышки на гриле с зеленью',
    //     description: 'Не следует, однако забывать, что реализация намеченных плановых',
    //     price: 1600
    //   },
    //   {
    //     id: 7,
    //     url: require('@/assets/item-three.png'),
    //     item: 'Креветки по-королевски в лимонном соке',
    //     description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
    //     price: 1820
    //   },
    //   {
    //     id: 8,
    //     url: require('@/assets/item-one.png'),
    //     item: 'Устрицы по рокфеллеровски',
    //     description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
    //     price: 2700
    //   }
    // ])

    const products = computed(() => {
      return store.getters.getDataSource
    })

    onMounted(() => {
      preloader.value = true
      // при монтировании компонента будет вызван action, который запишет в dataSource данные для отрисовки
      store.dispatch('setDataSource')

      setTimeout(() => {
        preloader.value = false
      }, 2000)
    })

    const addCardtoBasket = (val) => {
      console.log('uuidv4:', uuidv4())
      const item = {
        id: val.id,
        idx: uuidv4(),
        item: val.item,
        price: val.price,
        url: val.url
      }
      store.commit('SetPushBasketProducts', item)
    }

    const goTo = (id) => {
      console.log('Перенаправить', router)
      router.push(`/${id}`)
    }

    return {
      products,
      addCardtoBasket,
      goTo,
      preloader
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px 20px;
  justify-content: center
  // width: 100vw;
  // height: 100vh;
}

.preloader {
  position: fixed;
  inset: 0;
  background-color: rgba(10, 9, 9, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite
}
.loader::before , .loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 5px solid #D58C51;
  animation: prixClipFix 2s linear infinite ;
}
.loader::after{
  border-color: #FFF;
  animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
  inset: 6px;
}

@keyframes rotate {
  0%   {transform: rotate(0deg)}
  100%   {transform: rotate(360deg)}
}

@keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}
</style>
