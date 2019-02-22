<style lang="scss" scoped>
  @import "../../assets/sass/styles.scss";
  .button {
    @include buttonColor($red-color-01);
  }
</style>

<template>
  <button @click="deleteId" type="button" class="button">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: String,
    eventName: String,
  },
  methods: {
    deleteId() {
      this.$emit(this.eventName);
    },
  },
};
</script>
