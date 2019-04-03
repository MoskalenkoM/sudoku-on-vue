<template lang="pug">
  .page_view
    sudoku-square
</template>

<script>
import SudokuSquare from "./playing_field/SudokuSquare";

export default {
  components: {
    SudokuSquare
  }
};
</script>

<style lang="postcss" scoped>
.page_view {
  margin: auto;
  width: calc((var(--cellSize) * 3 + 10px) * 3);
}
</style>
