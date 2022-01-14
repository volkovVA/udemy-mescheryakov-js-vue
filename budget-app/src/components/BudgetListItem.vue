<template>
  <!-- 1. Внутри компоненты BudgetList взять шаблон который мы генерируем для одного элемента в списке
  //  и вынести его в отдельную компоненту например BudgetListItem. -->
  <div>
    <v-list-item class="mb-3">
      <!-- 5. В каждом элементе списка расход/доход доблжна быть иконка взависимости от того
      // какой тип у данного элемета расход или доход. Также должен менятся цвет цифры
      // на красный или зеленый. -->
        <v-icon large color="orange darken-2" class="mr-2" v-if="item.type === 'INCOME'">mdi-arrow-up-bold-box-outline</v-icon>
        <v-icon large color="orange darken-2" class="mr-2" v-else>mdi-arrow-down-bold-box-outline</v-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.comment"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-subtitle class="text-center" :style="{color: setColorValue}" v-text="item.value"></v-list-item-subtitle>
      </v-list-item-content>
      <!-- 4. При удаление одного item из списка запрашивать подтверждение хотя бы  обычным confirm. -->
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on }">
          <v-btn dark color="red accent-3" v-on="on">Delete</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Are you sure?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">Not delete</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false, deleteItem(item.id)">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-list-item>
  </div>
</template>

<script>

export default {
  name: 'BudgetListItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('deleteItem', id)
    }
  },
  computed: {
    setColorValue () {
      return (this.item.type === 'INCOME' ? 'green' : 'red')
    }
  }
}
</script>

<style>

</style>
