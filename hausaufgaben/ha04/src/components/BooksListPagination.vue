<template>
  <div>
    <button id="pagination-back-button" @click="prevPage" :class="{ disabled: this.$parent.page === 0 }">Previous</button>
    <button id="pagination-next-button" @click="nextPage" :class="{ disabled: this.$parent.page === 1361 }">Next</button>
  </div>
</template>

<script>
export default {
  name: 'BooksListPagination',
  
  methods: {
    prevPage() {
      if (this.$parent.page > 0) {
        this.$parent.page = this.$parent.page - 1;
      }
    },
    nextPage() {
      if (this.$parent.page < 1361) {
        this.$parent.page = this.$parent.page + 1;
      }
    }
  }
}
</script>
