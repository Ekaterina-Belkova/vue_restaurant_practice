<template>
  <main class="main">
    <CardProduct
      :urlImg="require('../../assets/item-one.png')"
      item="Устрицы по рокфеллеровски"
      description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
      price="2 700 ₽"
    />

    <CardProduct
      :urlImg="require('../../assets/item-two.png')"
      item="Свиные ребрышки на гриле с зеленью"
      description="Не следует, однако забывать, что реализация намеченных плановых"
      price="1 600 ₽"
    />

    <CardProduct
      :urlImg="require('../../assets/item-three.png')"
      item="Креветки по-королевски
в лимонном соке"
      description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
      price="1 820 ₽"
    />

    <CardProduct
      :urlImg="require('../../assets/item-one.png')"
      item="Устрицы по рокфеллеровски"
      description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
      price="2 700 ₽"
    />

    <CardProduct
      :urlImg="require('../../assets/item-one.png')"
      item="Устрицы по рокфеллеровски"
      description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
      price="2 700 ₽"
    />

    <CardProduct
      :urlImg="require('../../assets/item-two.png')"
      item="Свиные ребрышки на гриле с зеленью"
      description="Не следует, однако забывать, что реализация намеченных плановых"
      price="1 600 ₽"
    />

    <CardProduct
      :urlImg="require('../../assets/item-three.png')"
      item="Креветки по-королевски
в лимонном соке"
      description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
      price="1 820 ₽"
    />

    <CardProduct
      :urlImg="require('../../assets/item-one.png')"
      item="Устрицы по рокфеллеровски"
      description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
      price="2 700 ₽"
    />
  </main>
</template>

<script>
import CardProduct from '@/components/elements/CardProduct'

export default {
  name: 'TheMain',
  components: {
    CardProduct
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px 20px;
  width: 100vw;
  height: 100vh;
}

</style>
