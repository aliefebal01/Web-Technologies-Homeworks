<template>
  <img src='@/assets/BooksList.jpg' class='img-fluid rounded' alt=''>
  <div id="books" class="container">
    <div v-for="(book) in $parent.booksList.slice((this.$parent.page * this.$parent.windowSize), ((this.$parent.page + 1) * this.$parent.windowSize ))" v-bind:key="book.id"  class="book">
      <div class="book-title">{{ book.title }}</div>
      <div class="book-authors">{{ book.authors }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooksList',
  methods: {
    selectItem(index) {
      this.$parent.selectedIndex = index;
    }
  }
}
</script>