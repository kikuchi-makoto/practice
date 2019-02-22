<style lang="scss" scoped>
  @import "../../assets/sass/styles.scss";
  .button {
    padding: 0 20px;
    box-sizing: border-box;
    button {
      padding: 10px 0;
      width: 100%;
      @include buttonColor();
    }
  }
</style>

<template>
  <div class="button">
    <button @click="add" type="button">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    eventName: String,
  },
  methods: {
    add() {
      this.$emit(this.eventName);
    },
  },
};
</script>
