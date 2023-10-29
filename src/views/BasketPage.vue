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
    u
  </main>

  <footer class="basketfooter">
    <hr class="basketfooter__line">

    <div class="basketfooter__container">
      <h3 class="basketfooter__total">
        Заказ на сумму:
      </h3>
      <OrderButton />
    </div>
  </footer>
</template>

<script>
import GoBackBtn from '@/components/ui/GoBackBtn.vue'
import OrderButton from '@/components/ui/OrderButton.vue'

export default {
  name: 'BasketPage',
  components: {
    GoBackBtn,
    OrderButton
  },
  props: {
  },
  setup () {
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
  padding-left: 15vw;
}

.basketfooter {
  position: fixed;
  bottom:0;
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
.basketfooter__total {
  padding: 28px 0 35px 15vw;
  color: #fff;
  text-transform: uppercase;
  font-size: 21px;
  font-weight: 400;
}
</style>
