<template>
  <div>
    <template v-if="!isEmpty">
      <v-list-item
      v-for="(item, i) in list"
      :key="i"
      class="mb-3"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.comment"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle class="text-center" v-text="item.value"></v-list-item-subtitle>
        </v-list-item-content>
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn large color="error" v-on="on" @click="onConsole">Delete</v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Уверены что хотите удалить?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Не удалять</v-btn>
              <v-btn color="green darken-1" text @click="dialog = false, deleteItem(item.id)">Да</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list-item>
    </template>
    <v-alert type="info" v-else>
      Empty List
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    isEmpty () {
      return !Object.keys(this.list).length
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('deleteItem', id)
    }
  }
}
</script>

<style>

</style>
