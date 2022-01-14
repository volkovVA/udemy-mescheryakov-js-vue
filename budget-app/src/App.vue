<template>
  <v-app>
    <app-form></app-form>
    <app-total-balance></app-total-balance>
    <app-budget-list></app-budget-list>
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
  }
}
</script>
