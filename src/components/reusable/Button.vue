<template>
  <div>
    <div class="link-button" v-if="type === 'link'">
        <a :href="href" class="button">{{value}}</a>
    </div>

    <div class="normal-button" v-if="type !== 'link'">
      <button
        class="button"
        :class="clas"
        :disabled="disabled"
        :type="type"
        @click="click"
      > {{value}}
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: String,
    href: String,
    type: String,
    clas: String,
    disabled: Boolean,
    click: Function,
  },
};
</script>

<style lang="scss" scoped>
// $breakpoints
$desktop-media-1: 50em;

.button {
  text-decoration: none;
  color: var(--white);
  font-size: var(--fs-base);
  font-weight: 700;

  padding: 0.8em 1.6em;
  border-radius: 99em;
  border: 2px solid transparent;
  outline: none;
  background-color: var(--moderate-cyan);

  cursor: pointer;

  transition: all 350ms ease-in-out;
  &:not(.button--empty) {
    &:hover, &:focus {
      background-color: var(--white);
      color: var(--dark-cyan);
      border: 2px dashed;
    }
  }

  &--empty {
    background-color: var(--black);
  }
}
</style>
