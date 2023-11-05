<template>
  <main class="main">
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
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import CardProduct from '@/components/elements/CardProduct'

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

    const products = ref([
      {
        id: 1,
        url: require('@/assets/item-one.png'),
        item: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 2,
        url: require('@/assets/item-two.png'),
        item: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 3,
        url: require('@/assets/item-three.png'),
        item: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: 1820
      },
      {
        id: 4,
        url: require('@/assets/item-one.png'),
        item: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 5,
        url: require('@/assets/item-one.png'),
        item: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 6,
        url: require('@/assets/item-two.png'),
        item: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 7,
        url: require('@/assets/item-three.png'),
        item: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: 1820
      },
      {
        id: 8,
        url: require('@/assets/item-one.png'),
        item: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      }
    ])

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
      goTo
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

</style>
