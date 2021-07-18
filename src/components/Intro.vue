<template>
  <div class="intro container" id="top">
    <img class="intro__logo" src="../assets/logo-mastercraft.svg" alt="">
    <h3 class="intro__title">
      Mastercraft Bamboo Monitor Riser
    </h3>
    <p class="intro__para">
      A beautiful & handcrafted monitor stand to reduce neck and eye strain.
    </p>
    <div class="intro__cta cta">
      <Button
        href="#project"
        type="link"
        value="Back this project"
      />
      <a
          href=""
          class="cta__bookmark"
          @click="handleClick"
         :class="isBookmarked && 'cta__bookmark--bookmarked'"
        >
        <img src="../assets/icon-bookmark-checked.svg" alt="" v-if="isBookmarked" />
        <img src="../assets/icon-bookmark.svg" alt="" v-if="!isBookmarked" />
        <span v-if="isBookmarked"> Bookmarked </span>
        <span v-if="!isBookmarked"> Bookmark </span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from './reusable/Button.vue';

export default {
  components: {
    Button,
  },
  computed: {
    isBookmarked() { return this.getBookmarked(); },
  },
  methods: {
    handleClick(evt) {
      evt.preventDefault();
      this.setBookmark();
    },
    ...mapGetters(['getBookmarked']),
    ...mapActions(['setBookmark']),
  },
};
</script>

<style lang="scss" scoped>
.intro {
  background-color: var(--white);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  padding: var(--bg-spacer) var(--sm-spacer);
  margin-top: -4rem;
  max-width: var(--text-width);
  position: relative;

  img {
    width: 3.5rem;
  }

  &__logo {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  &__title {
    font-size: var(--fs-h3);
    line-height: 1;
    padding-bottom: var(--sm-spacer);
    color: initial;
  }

  &__para {
    padding-bottom: var(--bg-spacer);
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    &__bookmark {
      color: var(--dark-gray);
      font-size: calc(var(--fs-h4) - 0.4rem);
      text-decoration: none;
      font-weight: 500;

      background-color: var(--gray);
      width: max-content;

      border-radius: 99em;

      span {
        display: none;
      }

      @media (min-width: 50em) {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        padding-right: var(--sm-spacer);
        span { display: block }
      }

      &:hover, &:hover {
        opacity: 0.7;
      }

      &--bookmarked {
        color: var(--moderate-cyan);
        background-color: var(--light-cyan);
      }
    }
  }
}
</style>
