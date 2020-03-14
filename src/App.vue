<template>
  <v-app>
    <app-budget-list :list="list"></app-budget-list>
  </v-app>
</template>

<script>
import BudgetList from '@/components/BudgetList'

export default {
  name: 'App',

  components: {
    appBudgetList: BudgetList
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
  })
}
</script>
