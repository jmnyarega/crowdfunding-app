<template>
  <button
    class="button"
    :disabled="disabled"
    @click="click">
    {{value}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: String,
    type: String,
    disabled: Boolean,
    click: Function,
  },
};
</script>

<style lang="scss" scoped>
// $breakpoints
$desktop-media-1: 50em;

.button {
  color: var(--white);
  font-size: var(--fs-base);
  font-weight: 700;
  box-shadow: none;
  text-transform: initial;
  font-weight: 700;
  padding: 1em 2em;
  background-color: var(--dark-cyan);

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
</style>
