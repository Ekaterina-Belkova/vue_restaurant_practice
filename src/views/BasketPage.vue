<template>
  <div class="basket">

    <router-link to="/">
      Вернуться назад
    </router-link>

    Страница с корзиной
  </div>
</template>

<script>

export default {
  name: 'BasketPage',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

.basket {
  color: #fff;
  font-size: 45px;
}

</style>
