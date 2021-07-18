<template>
  <div class="hamburger" @click="toggle">
      <input type="checkbox" id="open-close" :checked=open />
      <div class="con">
        <div class="bar top"></div>
        <div class="bar middle"></div>
        <div class="bar bottom"></div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    open: Boolean,
  },
  methods: {
    toggle() {
      this.toggleMenu();
    },
    ...mapActions(['toggleMenu']),
  },
};
</script>

<style lang="scss">
.hamburger {
  z-index: 10;
  position: relative;

  input {
    position: absolute;
    opacity: 0;
  }

  .con {
    cursor: pointer;
    transition: all .7s ease;
  }

  .bar {
    height: 0.2rem;
    width: 3rem;
    background: var(--white);
    margin: 0.8rem auto;
    transition: all .7s ease;
  }

   input:checked ~ .con .top {
    transform: translateY(1rem) rotateZ(45deg);
  }

  input:checked ~ .con .bottom {
    transform: translateY(-1rem) rotateZ(-45deg);
  }

  input:checked ~ .con .middle {
    width: 0;
  }
}
</style>
