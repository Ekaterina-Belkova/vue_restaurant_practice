<template>
  <div :class="{
    'card': true,
    'card_basket': basket
  }">
    <img :src="urlImg" alt="" :class="{
      'preview': true,
      'preview_basket': basket
    }">
    <span :class="{
      'item': true,
      'item_basket': basket
    }">
      {{ item }}
    </span>

    <span :class="{
      'description': true,
      'description_basket': basket
    }">
      {{ description }}
    </span>

    <span :class="{
      'card__footer': true,
      'card__footer-basket': basket
    }">
      <span :class="{
        'price': true,
        'price_basket': basket
      }">
        {{ price }} ₽
      </span>

      <AddButton
        v-if="!basket"
        @click.stop="$emit('click-plus')"/>

      <DeleteButton
        v-else
        @click.stop="$emit('click-delete')"/>
    </span>
  </div>
</template>

<script>
import AddButton from '@/components/ui/AddButton.vue'
import DeleteButton from '@/components/ui/DeleteButton.vue'

export default {
  name: 'CardProduct',
  components: {
    AddButton,
    DeleteButton
  },
  props: {
    urlImg: {
      type: String,
      default: ''
    },
    item: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    basket: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}

</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 312px;
  height: 552px;
  gap: 45px;
  padding: 21px;
  border: 1px solid #D58C51;
  color: #FFF;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
}

.card:hover {
.item, .description, .price {
    color: #D58C51;
  }
}

.card_basket {
  flex-direction: row;
  padding: 10px;
  width: 150vh;
  height: auto;
  border: none;
  margin-bottom: 10px;

  // @media screen and (max-width: 820px) {
  //   width: 50vh;
  // }

    @media screen and (max-width: 1300px) {
    width: 100vh;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 252px;
    border: 1px solid #D58C51;
    margin-bottom: 10px;
  }
}

.preview_basket {
  width: 122px;
  height: 122px;

  @media screen and (max-width: 500px) {
    width: auto;
    padding-bottom: 20px;
  }
}

.item {
  font-size: 17px;
  font-weight: 500;
}

.item_basket {
  position: absolute;
  z-index: 1;

  @media screen and (max-width: 500px) {
    width: auto;
    padding-top: 20px;
  }
}

.description {
  font-size: 14px;
  font-weight: 400;
}

.description_basket {
  display: none;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 17px;
  font-weight: 500;
}

.card__footer-basket {
  justify-content: flex-end;
  gap: 15px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
}

.price_basket {
  color: #D58C51;
}

.addbutton__basket {
  color: #D58C51;
  border: 2px solid #D58C51;
  transform: rotate(45deg);
}
</style>
