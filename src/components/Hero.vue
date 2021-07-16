<template>
  <div class="header--bg">
    <div class="header container">
      <div class="header__logo">
        <img src="../assets/logo.svg" alt="crowdfunding - home">
      </div>
      <div class="header__hamburger">
        <Hamburger :open="open" />
      </div>
    </div>
    {{open}}
    <div v-if="open" class="mobile-nav">
      <MobileNav />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import MobileNav from './nav/Mobile.vue';
import Hamburger from './reusable/Hamburger.vue';

export default {
  computed: {
    open() {
      return this.openMenu();
    },
  },
  components: {
    MobileNav,
    Hamburger,
  },
  methods: {
    ...mapGetters(['openMenu']),
  },
};
</script>

<style lang="scss">
@media (min-width: 60em) {
  .mobile-nav, .header__hamburger {
    opacity: 0;
    z-index: -1;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--sm-spacer);

  &--bg {
    background: no-repeat url(../assets/image-hero-mobile.jpg);
    background-size: cover;
    background-position: center;
    min-height: 24rem;
  }

  &__hamburger {
    cursor: pointer;
  }
}
</style>
