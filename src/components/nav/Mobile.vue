<template>
  <div class="nav container">
    <ul class="nav__items">
      <li class="nav__item">
        <a class="nav__link" @click="handleClick()" href="#project">about</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" @click="handleClick()" href="#project">Discover</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" @click="handleClick()" href="#project">get Started</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['toggleMenu']),
    handleClick() { this.toggleMenu(); },
  },
};
</script>

<style lang="scss" scoped>
  .nav {
    background-color: var(--white);
    box-shadow: 0 0 10px 5px var(--dark-gray);
    border-radius: var(--border-radius);
    align-items: initial;
    max-width: calc(var(--text-width));

    position: absolute;
    top: -100rem;
    left:0;
    right: 0;
    z-index: 10;
    opacity: 0;

    animation: open 350ms linear forwards;

    @keyframes open {
      100% {
        opacity: 1;
        top: 6rem;
         animation-timing-function: ease-in-out;
      }
    }

    &__items {
      list-style: none;
      text-align: initial;
    }

    &__item {
      padding: calc(var(--sm-spacer) / 1.4) var(--sm-spacer);
      &:hover {
        color: var(--moderate-cyan);
      }
    }

    &__item + &__item {
      margin-top: calc(var(--sm-spacer) / 3) 0;
      border-top: 1px solid var(--gray);
    }

    &__link {
      color: inherit;
      text-decoration: none;
      text-transform: capitalize;
      font-size: var(--fs-h5);
    }
  }
</style>
