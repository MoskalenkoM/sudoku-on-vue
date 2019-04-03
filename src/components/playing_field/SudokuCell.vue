<template lang="pug">
  input.cell(
    :class="[className, matchingFirst ? 'err' : '', matchingSecond ? 'err' : '']"
    :value="val"
    @input="enterNumber"
  )
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: true
    },
    items: {
      type: String,
      required: true
    },
    val: {
      type: String,
      required: true
    },
    matchingFirst: {
      type: Boolean,
      required: true
    },
    matchingSecond: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      // currentValue: this.val,
      count: 0
    };
  },
  methods: {
    enterNumber(e) {
      const val = e.target.value[e.target.value.length - 1];
      if (this.validNumb(val)) {
        // this.currentValue = "";
        e.target.value = "";
        // this.currentValue = val;
        e.target.value = val;
        this.sendCurrentData(e);
      } else if (e.inputType === "deleteContentBackward") {
        // this.currentValue = "";
        e.target.value = "";
        this.sendCurrentData(e);
      } else {
        // e.target.value = this.currentValue;
        e.target.value = "";
      }
    },
    validNumb(v) {
      const checkVal =
        v === "1" ||
        v === "2" ||
        v === "3" ||
        v === "4" ||
        v === "5" ||
        v === "6" ||
        v === "7" ||
        v === "8" ||
        v === "9" ||
        false;
      return checkVal;
    },
    sendCurrentData(e) {
      this.count += 1;
      // console.log("количество обращений в store:", this.count);
      // console.log("актуальное значение:", e.target.value);
      this.$emit("sendData", {
        block: this.className,
        item: this.items,
        value: e.target.value
      });
    }
  }
  // watch: {
  //   currentValue() {
  //     this.count += 1;
  //     console.log("количество обращений в store:", this.count);
  //     console.log("актуальное значение:", this.currentValue);
  //     this.$emit("sendData", {
  //       block: this.className,
  //       item: this.items,
  //       value: this.currentValue
  //     });
  //   }
  // }
};
</script>

<style lang="postcss" scoped>
.cell {
  color: rgba(0, 0, 0, 0.5);
  height: var(--cellSize);
  width: var(--cellSize);
  margin: auto;
  border: none;
  text-align: center;
  transition: background-color 1s linear;
}

.a,
.f,
.g {
  background-color: rgba(219, 215, 210, 0.5);
}
.b,
.d,
.h {
  background-color: rgba(189, 183, 107, 0.5);
}
.c,
.e,
.k {
  background-color: rgba(225, 204, 79, 0.5);
}

.err {
  background-color: rgba(255, 43, 43, 0.5);
  /* animation: err 3s infinite ease-in-out; */
}
</style>
