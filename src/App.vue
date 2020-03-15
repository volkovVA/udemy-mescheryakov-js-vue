<template>
  <v-app>
    <app-total-balance :total="totalBalance"></app-total-balance>
    <app-budget-list :list="list" @deleteItem="onDeleteItem"></app-budget-list>
  </v-app>
</template>

<script>
import BudgetList from '@/components/BudgetList'
import TotalBalance from '@/components/TotalBalance'

export default {
  name: 'App',

  components: {
    appBudgetList: BudgetList,
    appTotalBalance: TotalBalance
  },

  data: () => ({
    list: {
      1: {
        type: 'INCOM',
        value: 100,
        comment: 'Some comment',
        id: 1
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Some outcome comment',
        id: 2
      }
    }
  }),
  computed: {
    totalBalance () {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0)
    }
  },
  methods: {
    onDeleteItem (id) {
      this.$delete(this.list, id)
    }
  }
}
</script>
