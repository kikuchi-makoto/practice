<style lang="scss" scoped>
  @import "../assets/sass/styles.scss";
  .label {
    width: 30%;
    background-color: $gray-color-01;
    padding: 20px;
    box-sizing: border-box;
  }
  .required {
    color: $red-color-01;
    border: 1px solid $red-color-01;
    padding: 5px;
    display: inline-block;
    margin-left: 10px;
  }
</style>

<template>
  <div class="label">
    {{text}}
    <div class="required" v-if="isRequired">必須</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    isRequired: Boolean,
  },
};
</script>
