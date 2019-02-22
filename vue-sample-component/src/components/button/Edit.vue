<style lang="scss" scoped>
  @import "../../assets/sass/styles.scss";
  .button {
    @include buttonColor($blue-color-01);
  }
</style>

<template>
  <button @click="edit" type="button" class="button">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: String,
    eventName: String,
  },
  methods: {
    edit() {
      this.$emit(this.eventName);
    },
  },
};
</script>
