<template lang="pug">
  footer.footer {{ currentYear }}
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="postcss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: auto 0 0;
  color: rgba(80, 80, 80, 1);
  font-size: 20px;
  text-transform: uppercase;
  border-top: 1px solid rgba(80, 80, 80, 1);
}
</style>
