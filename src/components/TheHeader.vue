<template lang="pug">
  header.header 
    p.day {{ dayOfWeeks }}
    p.title Sudoku 
    p.time {{ hour < 10 ? '0' + hour : hour }} : {{ min < 10 ? '0' + min : min }} : {{ sec < 10 ? '0' + sec : sec }}
</template>

<script>
export default {
  data() {
    return {
      hour: "",
      min: "",
      sec: "",
      dayNumber: ""
    };
  },
  methods: {
    getTime() {
      setInterval(() => {
        const currentDate = new Date();

        this.hour = currentDate.getHours();
        this.min = currentDate.getMinutes();
        this.sec = currentDate.getSeconds();
        this.dayNumber = currentDate.getDay();
      }, 1000);
    }
  },
  computed: {
    dayOfWeeks() {
      const day =
        this.dayNumber === 0
          ? "воскресенье"
          : this.dayNumber === 1
          ? "понедельник"
          : this.dayNumber === 2
          ? "вторник"
          : this.dayNumber === 3
          ? "среда"
          : this.dayNumber === 4
          ? "четверг"
          : this.dayNumber === 5
          ? "пятница"
          : this.dayNumber === 6
          ? "суббота"
          : "";

      return day;
    }
  },
  beforeMount() {
    this.getTime();
  }
};
</script>

<style lang="postcss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: rgba(80, 80, 80, 0.5);
  font-size: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(80, 80, 80, 0.5);
}

.time,
.day {
  width: 200px;
  background-color: rgba(189, 183, 107, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>
