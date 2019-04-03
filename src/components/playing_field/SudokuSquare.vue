<template lang="pug">
  .square
    .wrap_block(
      v-for="(item, key, index) in blocks"
      :key="index"
    )
      sudoku-cell(
        v-for="(cell, k) in item"
        :key="k"
        :items="k"
        :val="cell"
        :className="key"
        :matchingFirst='matchBlockFirst === k'
        :matchingSecond='matchBlockSecond === k'
        @sendData="updateData"
      )
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SudokuCell from "./SudokuCell";

export default {
  components: {
    SudokuCell
  },
  data() {
    return {
      matchBlockFirst: "",
      matchBlockSecond: "",
      matchIs: false
    };
  },
  methods: {
    ...mapActions("blocks", {
      changeBlocks: "changeBlocks"
    }),
    updateData(data) {
      // проверка на совпадение
      this.matchData(data);
      // изменение значения в store
      if (this.matchIs) {
        return;
      }
      // this.changeBlocks({
      //   block: data.block,
      //   item: data.item,
      //   value: data.value
      // });
      this.inVuex(data);
    },
    matchData(data) {
      // хэндлер проверки на совпадение
      for (let itBlock in this.blocks) {
        if (data.block === itBlock) {
          for (let it in this.blocks[itBlock]) {
            if (data.value === this.blocks[itBlock][it]) {
              // console.log("уже есть в", it, "пришёл:", data.item);
              this.matchIs = true;
              this.matchBlockFirst = it;
              this.matchBlockSecond = data.item;
              // this.blocks[itBlock][data.item] = data.value;
              setTimeout(() => {
                this.matchIs = false;
                this.matchBlockFirst = "";
                this.matchBlockSecond = "";
                // this.blocks[itBlock][data.item] = "";
              }, 3000);
            }
          }
        }
      }
    },
    inVuex(data) {
      this.changeBlocks({
        block: data.block,
        item: data.item,
        value: data.value
      });
    }
  },
  computed: {
    ...mapGetters("blocks", {
      blocks: "blocks"
    }),
    matchOne() {
      return this.matchBlockFirst;
    }
  },
  watch: {
    matchBlockFirst() {
      // console.log(this.matchBlockFirst);
      // this.matchIs = false;
    },
    matchBlockSecond() {
      // this.matchIs = false;
      // console.log(this.matchBlockSecond);
    }
  }
};
</script>

<style lang="postcss" scoped>
.square {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-around;
}

.wrap_block {
  display: flex;
  flex-wrap: wrap;
  height: calc(var(--cellSize) * 3 + 6px);
  width: calc(var(--cellSize) * 3 + 6px);
}
</style>
