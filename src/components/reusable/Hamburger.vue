<template>
  <div class="hamburger" @click="toggle">
    <input type="checkbox" id="open-close" :checked=open />
    <span></span>
    <span></span>
    <span></span>
    <label for="open-close">
    </label>
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean,
  },
  methods: {
    toggle() {
      this.$emit('nav-toggle');
    },
  },
};
</script>

<style lang="scss">
.hamburger {
  cursor: pointer;

  label {
    display: block;
    width: calc(var(--sm-spacer) * 2);

    &:hover {
      opacity: 0.7;
    }
  }

  input {
    position: absolute;
    opacity: 0;
  }

  span {
    height: 2px;
    display: block;
    background-color: var(--white);

    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  span + span {
    margin-top: 4px;
  }

  span:first-of-type {
    transform-origin: 0% 100%;
  }

   input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

   input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(-1px, -2px);
  }
}
</style>
