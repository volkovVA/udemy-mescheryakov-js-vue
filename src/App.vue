<template>
  <v-app>
    <app-form @submitForm="onFormSubmit"></app-form>
    <app-total-balance :list="list"></app-total-balance>
    <app-budget-list :list="list"></app-budget-list>
  </v-app>
</template>

<script>
import TotalBalance from '@/components/TotalBalance'
import BudgetList from '@/components/BudgetList'
import Form from '@/components/Form'

export default {
  name: 'App',

  components: {
    appBudgetList: BudgetList,
    appTotalBalance: TotalBalance,
    appForm: Form
  },

  data: () => ({
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1
      },
      2: {
        type: 'OUTCOME',
        value: 50,
        comment: 'Some outcome comment',
        id: 2
      }
    }
  }),
  methods: {
    onFormSubmit (data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      }
      this.$set(this.list, newObj.id, newObj)
    }
  }
}
</script>
