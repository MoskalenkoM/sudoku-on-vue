<template  lang="pug">
  .main_page
    sudoku-header
    main.main_block
      router-view
    sudoku-footer
</template>

<script>
import sudokuHeader from "./components/TheHeader";
import sudokuFooter from "./components/TheFooter";

export default {
  components: {
    sudokuHeader,
    sudokuFooter
  }
};
</script>

<style>
.main_page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.main_block {
  display: flex;
  margin: auto;
  width: 100%;
}
</style>
