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
        :matchingFirst='matchCellFirst === k'
        :matchingSecond='matchCellSecond === k'
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
      matchCellFirst: "",
      matchCellSecond: "",
      matchIs: false,
      lines: {},
      columns: {}
    };
  },
  methods: {
    ...mapActions("blocks", {
      changeBlocks: "changeBlocks"
    }),
    updateData(data) {
      // проверка на совпадение
      this.matchData(data, this.blocks);
      this.matchLines(data, this.lines);
      this.matchColumns(data, this.columns);
      // изменение значения в store
      if (!this.matchIs) {
        this.inVuex(data);
        this.createLines();
        this.createColumns();
      }
    },
    createLines() {
      this.lines.a = {
        a1: this.blocks.a.a1,
        a2: this.blocks.a.a2,
        a3: this.blocks.a.a3,
        b1: this.blocks.b.b1,
        b2: this.blocks.b.b2,
        b3: this.blocks.b.b3,
        c1: this.blocks.c.c1,
        c2: this.blocks.c.c2,
        c3: this.blocks.c.c3
      };
      this.lines.b = {
        a4: this.blocks.a.a4,
        a5: this.blocks.a.a5,
        a6: this.blocks.a.a6,
        b4: this.blocks.b.b4,
        b5: this.blocks.b.b5,
        b6: this.blocks.b.b6,
        c4: this.blocks.c.c4,
        c5: this.blocks.c.c5,
        c6: this.blocks.c.c6
      };
      this.lines.c = {
        a7: this.blocks.a.a7,
        a8: this.blocks.a.a8,
        a9: this.blocks.a.a9,
        b7: this.blocks.b.b7,
        b8: this.blocks.b.b8,
        b9: this.blocks.b.b9,
        c7: this.blocks.c.c7,
        c8: this.blocks.c.c8,
        c9: this.blocks.c.c9
      };
      this.lines.d = {
        d1: this.blocks.d.d1,
        d2: this.blocks.d.d2,
        d3: this.blocks.d.d3,
        e1: this.blocks.e.e1,
        e2: this.blocks.e.e2,
        e3: this.blocks.e.e3,
        f1: this.blocks.f.f1,
        f2: this.blocks.f.f2,
        f3: this.blocks.f.f3
      };
      this.lines.e = {
        d4: this.blocks.d.d4,
        d5: this.blocks.d.d5,
        d6: this.blocks.d.d6,
        e4: this.blocks.e.e4,
        e5: this.blocks.e.e5,
        e6: this.blocks.e.e6,
        f4: this.blocks.f.f4,
        f5: this.blocks.f.f5,
        f6: this.blocks.f.f6
      };
      this.lines.f = {
        d7: this.blocks.d.d7,
        d8: this.blocks.d.d8,
        d9: this.blocks.d.d9,
        e7: this.blocks.e.e7,
        e8: this.blocks.e.e8,
        e9: this.blocks.e.e9,
        f7: this.blocks.f.f7,
        f8: this.blocks.f.f8,
        f9: this.blocks.f.f9
      };
      this.lines.g = {
        g1: this.blocks.g.g1,
        g2: this.blocks.g.g2,
        g3: this.blocks.g.g3,
        h1: this.blocks.h.h1,
        h2: this.blocks.h.h2,
        h3: this.blocks.h.h3,
        k1: this.blocks.k.k1,
        k2: this.blocks.k.k2,
        k3: this.blocks.k.k3
      };
      this.lines.h = {
        g4: this.blocks.g.g4,
        g5: this.blocks.g.g5,
        g6: this.blocks.g.g6,
        h4: this.blocks.h.h4,
        h5: this.blocks.h.h5,
        h6: this.blocks.h.h6,
        k4: this.blocks.k.k4,
        k5: this.blocks.k.k5,
        k6: this.blocks.k.k6
      };
      this.lines.k = {
        g7: this.blocks.g.g7,
        g8: this.blocks.g.g8,
        g9: this.blocks.g.g9,
        h7: this.blocks.h.h7,
        h8: this.blocks.h.h8,
        h9: this.blocks.h.h9,
        k7: this.blocks.k.k7,
        k8: this.blocks.k.k8,
        k9: this.blocks.k.k9
      };
    },
    createColumns() {
      this.columns.a = {
        a1: this.blocks.a.a1,
        a4: this.blocks.a.a4,
        a7: this.blocks.a.a7,
        d1: this.blocks.d.d1,
        d4: this.blocks.d.d4,
        d7: this.blocks.d.d7,
        g1: this.blocks.g.g1,
        g4: this.blocks.g.g4,
        g7: this.blocks.g.g7
      };
      this.columns.b = {
        a2: this.blocks.a.a2,
        a5: this.blocks.a.a5,
        a8: this.blocks.a.a8,
        d2: this.blocks.d.d2,
        d5: this.blocks.d.d5,
        d8: this.blocks.d.d8,
        g2: this.blocks.g.g2,
        g5: this.blocks.g.g5,
        g8: this.blocks.g.g8
      };
      this.columns.c = {
        a3: this.blocks.a.a3,
        a6: this.blocks.a.a6,
        a9: this.blocks.a.a9,
        d3: this.blocks.d.d3,
        d6: this.blocks.d.d6,
        d9: this.blocks.d.d9,
        g3: this.blocks.g.g3,
        g6: this.blocks.g.g6,
        g9: this.blocks.g.g9
      };
      this.columns.d = {
        b1: this.blocks.b.b1,
        b4: this.blocks.b.b4,
        b7: this.blocks.b.b7,
        e1: this.blocks.e.e1,
        e4: this.blocks.e.e4,
        e7: this.blocks.e.e7,
        h1: this.blocks.h.h1,
        h4: this.blocks.h.h4,
        h7: this.blocks.h.h7
      };
      this.columns.e = {
        b2: this.blocks.b.b2,
        b5: this.blocks.b.b5,
        b8: this.blocks.b.b8,
        e2: this.blocks.e.e2,
        e5: this.blocks.e.e5,
        e8: this.blocks.e.e8,
        h2: this.blocks.h.h2,
        h5: this.blocks.h.h5,
        h8: this.blocks.h.h8
      };
      this.columns.f = {
        b3: this.blocks.b.b3,
        b6: this.blocks.b.b6,
        b9: this.blocks.b.b9,
        e3: this.blocks.e.e3,
        e6: this.blocks.e.e6,
        e9: this.blocks.e.e9,
        h3: this.blocks.h.h3,
        h6: this.blocks.h.h6,
        h9: this.blocks.h.h9
      };
      this.columns.g = {
        c1: this.blocks.c.c1,
        c4: this.blocks.c.c4,
        c7: this.blocks.c.c7,
        f1: this.blocks.f.f1,
        f4: this.blocks.f.f4,
        f7: this.blocks.f.f7,
        k1: this.blocks.k.k1,
        k4: this.blocks.k.k4,
        k7: this.blocks.k.k7
      };
      this.columns.h = {
        c2: this.blocks.c.c2,
        c5: this.blocks.c.c5,
        c8: this.blocks.c.c8,
        f2: this.blocks.f.f2,
        f5: this.blocks.f.f5,
        f8: this.blocks.f.f8,
        k2: this.blocks.k.k2,
        k5: this.blocks.k.k5,
        k8: this.blocks.k.k8
      };
      this.columns.k = {
        c3: this.blocks.c.c3,
        c6: this.blocks.c.c6,
        c9: this.blocks.c.c9,
        f3: this.blocks.f.f3,
        f6: this.blocks.f.f6,
        f9: this.blocks.f.f9,
        k3: this.blocks.k.k3,
        k6: this.blocks.k.k6,
        k9: this.blocks.k.k9
      };
    },
    matchData(data, blocks) {
      for (let itBlock in blocks) {
        if (data.block === itBlock) {
          for (let it in blocks[itBlock]) {
            if (data.value === blocks[itBlock][it]) {
              if ((data.value === "") & (blocks[itBlock][it] === "")) {
                return;
              }
              // console.log("уже есть в", it, "пришёл:", data.item);
              this.matchIs = true;
              this.matchCellFirst = it;
              this.matchCellSecond = data.item;
              data.value = "";
              this.inVuex(data);
              setTimeout(() => {
                this.matchIs = false;
                this.matchCellFirst = "";
                this.matchCellSecond = "";
              }, 1000);
            }
          }
        }
      }
    },
    matchLines(data, lines) {
      if (
        data.item === "a1" ||
        data.item === "a2" ||
        data.item === "a3" ||
        data.item === "b1" ||
        data.item === "b2" ||
        data.item === "b3" ||
        data.item === "c1" ||
        data.item === "c2" ||
        data.item === "c3"
      ) {
        this.checkLinesColumns(data, lines["a"]);
      } else if (
        data.item === "a4" ||
        data.item === "a5" ||
        data.item === "a6" ||
        data.item === "b4" ||
        data.item === "b5" ||
        data.item === "b6" ||
        data.item === "c4" ||
        data.item === "c5" ||
        data.item === "c6"
      ) {
        this.checkLinesColumns(data, lines["b"]);
      } else if (
        data.item === "a7" ||
        data.item === "a8" ||
        data.item === "a9" ||
        data.item === "b7" ||
        data.item === "b8" ||
        data.item === "b9" ||
        data.item === "c7" ||
        data.item === "c8" ||
        data.item === "c9"
      ) {
        this.checkLinesColumns(data, lines["c"]);
      } else if (
        data.item === "d1" ||
        data.item === "d2" ||
        data.item === "d3" ||
        data.item === "e1" ||
        data.item === "e2" ||
        data.item === "e3" ||
        data.item === "f1" ||
        data.item === "f2" ||
        data.item === "f3"
      ) {
        this.checkLinesColumns(data, lines["d"]);
      } else if (
        data.item === "d4" ||
        data.item === "d5" ||
        data.item === "d6" ||
        data.item === "e4" ||
        data.item === "e5" ||
        data.item === "e6" ||
        data.item === "f4" ||
        data.item === "f5" ||
        data.item === "f6"
      ) {
        this.checkLinesColumns(data, lines["e"]);
      } else if (
        data.item === "d7" ||
        data.item === "d8" ||
        data.item === "d9" ||
        data.item === "e7" ||
        data.item === "e8" ||
        data.item === "e9" ||
        data.item === "f7" ||
        data.item === "f8" ||
        data.item === "f9"
      ) {
        this.checkLinesColumns(data, lines["f"]);
      } else if (
        data.item === "g1" ||
        data.item === "g2" ||
        data.item === "g3" ||
        data.item === "h1" ||
        data.item === "h2" ||
        data.item === "h3" ||
        data.item === "k1" ||
        data.item === "k2" ||
        data.item === "k3"
      ) {
        this.checkLinesColumns(data, lines["g"]);
      } else if (
        data.item === "g4" ||
        data.item === "g5" ||
        data.item === "g6" ||
        data.item === "h4" ||
        data.item === "h5" ||
        data.item === "h6" ||
        data.item === "k4" ||
        data.item === "k5" ||
        data.item === "k6"
      ) {
        this.checkLinesColumns(data, lines["h"]);
      } else if (
        data.item === "g7" ||
        data.item === "g8" ||
        data.item === "g9" ||
        data.item === "h7" ||
        data.item === "h8" ||
        data.item === "h9" ||
        data.item === "k7" ||
        data.item === "k8" ||
        data.item === "k9"
      ) {
        this.checkLinesColumns(data, lines["k"]);
      }
    },
    checkLinesColumns(data, lines) {
      for (let cell in lines) {
        if ((data.value === "") & (lines[cell] === "")) {
          return;
        }
        if (lines[cell] === data.value) {
          this.matchIs = true;
          this.matchCellFirst = cell;
          this.matchCellSecond = data.item;
          data.value = "";
          this.inVuex(data);
          setTimeout(() => {
            this.matchIs = false;
            this.matchCellFirst = "";
            this.matchCellSecond = "";
          }, 1000);
        }
      }
    },
    matchColumns(data, columns) {
      if (
        data.item === "a1" ||
        data.item === "a4" ||
        data.item === "a7" ||
        data.item === "d1" ||
        data.item === "d4" ||
        data.item === "d7" ||
        data.item === "g1" ||
        data.item === "g4" ||
        data.item === "g7"
      ) {
        this.checkLinesColumns(data, columns["a"]);
      } else if (
        data.item === "a2" ||
        data.item === "a5" ||
        data.item === "a8" ||
        data.item === "d2" ||
        data.item === "d5" ||
        data.item === "d8" ||
        data.item === "g2" ||
        data.item === "g5" ||
        data.item === "g8"
      ) {
        this.checkLinesColumns(data, columns["b"]);
      } else if (
        data.item === "a3" ||
        data.item === "a6" ||
        data.item === "a9" ||
        data.item === "d3" ||
        data.item === "d6" ||
        data.item === "d9" ||
        data.item === "g3" ||
        data.item === "g6" ||
        data.item === "g9"
      ) {
        this.checkLinesColumns(data, columns["c"]);
      } else if (
        data.item === "b1" ||
        data.item === "b4" ||
        data.item === "b7" ||
        data.item === "e1" ||
        data.item === "e4" ||
        data.item === "e7" ||
        data.item === "h1" ||
        data.item === "h4" ||
        data.item === "h7"
      ) {
        this.checkLinesColumns(data, columns["d"]);
      } else if (
        data.item === "b2" ||
        data.item === "b5" ||
        data.item === "b8" ||
        data.item === "e2" ||
        data.item === "e5" ||
        data.item === "e8" ||
        data.item === "h2" ||
        data.item === "h5" ||
        data.item === "h8"
      ) {
        this.checkLinesColumns(data, columns["e"]);
      } else if (
        data.item === "b3" ||
        data.item === "b6" ||
        data.item === "b9" ||
        data.item === "e3" ||
        data.item === "e6" ||
        data.item === "e9" ||
        data.item === "h3" ||
        data.item === "h6" ||
        data.item === "h9"
      ) {
        this.checkLinesColumns(data, columns["f"]);
      } else if (
        data.item === "c1" ||
        data.item === "c4" ||
        data.item === "c7" ||
        data.item === "f1" ||
        data.item === "f4" ||
        data.item === "f7" ||
        data.item === "k1" ||
        data.item === "k4" ||
        data.item === "k7"
      ) {
        this.checkLinesColumns(data, columns["g"]);
      } else if (
        data.item === "c2" ||
        data.item === "c5" ||
        data.item === "c8" ||
        data.item === "f2" ||
        data.item === "f5" ||
        data.item === "f8" ||
        data.item === "k2" ||
        data.item === "k5" ||
        data.item === "k8"
      ) {
        this.checkLinesColumns(data, columns["h"]);
      } else if (
        data.item === "c3" ||
        data.item === "c6" ||
        data.item === "c9" ||
        data.item === "f3" ||
        data.item === "f6" ||
        data.item === "f9" ||
        data.item === "k3" ||
        data.item === "k6" ||
        data.item === "k9"
      ) {
        this.checkLinesColumns(data, columns["k"]);
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
    })
  },
  beforeMount() {
    this.createLines();
    this.createColumns();
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
