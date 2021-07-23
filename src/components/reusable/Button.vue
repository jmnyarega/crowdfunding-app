<template>
  <div>
    <div class="link-button" v-show="type === 'link'">
        <a :href="href" class="button">{{value}}</a>
    </div>

    <div class="normal-button" v-show="type !== 'link'">
      <button
        class="button"
        :class="className"
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
    className: Object,
    disabled: Boolean,
    click: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  text-decoration: none;
  color: var(--white);
  font-weight: var(--fw-bold);

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
