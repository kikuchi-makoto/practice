<style lang="scss" scoped>
  @import "../../assets/sass/styles.scss";
  .button {
    @include buttonColor($red-color-01);
  }
</style>

<template>
  <button type="button" class="button">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
