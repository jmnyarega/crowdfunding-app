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

  .con,
  .special-con {
    cursor: pointer;
    display: inline-block;
  }

  .bar {
    display: block;
    height: 2px;
    width: 45px;
    background: var(--white);
    margin: 10px auto;
  }

  .con {
    width: auto;
    margin: 0 auto;
    transition: all .7s ease;
  }

  .bar {
    transition: all .7s ease;
  }

  input:checked ~ .con .bar {
    background-color: var(--gray);
  }

   input:checked ~ .con .top {
    transform: translateY(12px) rotateZ(45deg);
  }

  input:checked ~ .con .bottom {
    transform: translateY(-12px) rotateZ(-45deg);
  }

  input:checked ~ .con .middle {
    width: 0;
  }
}
</style>
