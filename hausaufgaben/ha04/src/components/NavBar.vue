<template>
  <nav class='navbar navbar-light bg-light border rounded mt-2'>
    <div class='container-fluid'>

      <a class='navbar-brand' href='#'>
        <i class='bi bi-book-half'></i>
        HAUSAUFGABE 4
      </a>

      <div>
        <!-- TODO: implement -->
        
        <button class='btn btn-primary me-3' type="submit" id="btn-dark-mode" @click='toggleDarkMode'>{{ (this.$parent.darkMode) ? "Lights on" : "Lights off" }}</button>

        <button class='btn btn-primary me-3' type='submit' @click='toggleTests'>
          <i class='bi bi-robot'></i>
          {{ (!testsOpen) ? "Run tests" : "Close tests" }}
        </button>
      </div>

    </div>
  </nav>  
</template>

<script>
export default {
  name: 'NavBar',
  props: ['testsOpen'],
  methods: {
    toggleDarkMode() {
      // TODO: implement me
      this.$root.darkMode = !this.$root.darkMode;
      let themeLink = document.querySelector("#bootstrap-theme");
      if(this.$root.darkMode){
        themeLink.href = this.$root.darkThemeUrl;
      }else{
        themeLink.href = this.$root.lightThemeUrl;
      }
    },
    toggleTests() {
      this.$emit('toggle-tests');
    }    
  }
}
</script>