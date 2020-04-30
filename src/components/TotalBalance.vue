<template>
  <div class="total-value" :class="totalBalanceColor">Balance: {{ totalBalance }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TotalBalance',
  // props: {
  //   list: {
  //     type: Object,
  //     default: null
  //   }
  // },
  computed: {
    ...mapGetters('listStore', ['budgetList']),
    // 3. TotalBalance должен менять цвет текста в зависимости от значения total,
    // если значение больше нуля то цвет  зеленый, если ноль то черный и если
    // меньше нуля то красный.
    totalBalanceColor () {
      if (this.totalBalance > 0) {
        return 'green--text'
      }
      if (this.totalBalance === 0) {
        return 'black--text'
      }
      return 'red--text'
    },
    totalBalance () {
      return Object.values(this.budgetList).reduce((acc, item) => acc + this.plusMinus(item.type) * item.value, 0)
    }
  },
  methods: {
    // 2. Сейчас есть бага, если мы выберем в форме тип outcome но
    // цифру введем без минуса то это значение приплюсуется с общему балансу,
    //  нужно это исправить.
    plusMinus (type) {
      return type === 'INCOME' ? 1 : -1
    }
  }
}
</script>

<style scoped>
  .total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }
</style>
