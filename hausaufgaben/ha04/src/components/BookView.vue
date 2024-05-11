<template>
  <img src='@/assets/BooksList.jpg' class='img-fluid rounded' alt=''>
  <div id="book" class="container">
    
    <div v-for="(book) in $parent.booksList.slice(this.$parent.selectedIndex, this.$parent.selectedIndex + 1)" v-bind:key="book.id"  class="book">
      <div><div class="book-image"  ><img id="book-image" v-bind:src="book.thumbnail" alt=""></div></div>
      <div><div class="book-title" id="book-title"> {{ book.title }} <span v-if="book.subtitle"> - {{ book.subtitle }}</span> </div></div>
      
      
      
      <div>Authors: <div class="book-property"> {{ book.authors }}</div></div>
      <div>Average Rating: <div class="book-property">{{ book.average_rating }}</div></div>
      <div>Categories: <div class="book-property"> {{ book.categories }}</div></div>
      <div>Description: <div class="book-property"> {{ book.description }}</div></div>
      <div>ISBN 10: <div class="book-property"> {{ book.isbn10 }}</div> </div>
      <div>ISBN 13: <div class="book-property"> {{ book.isbn13 }}</div> </div>
      <div>Num Pages: <div class="book-property"> {{ book.num_pages }}</div> </div>
      <div>Published Year: <div class="book-property"> {{ book.published_year }}</div> </div>
      <div>Ratings Count: <div class="book-property"> {{ book.ratings_count }}</div> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookVue',
}
</script>