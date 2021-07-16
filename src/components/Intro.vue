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
          href="#0"
          class="cta__bookmark"
          @click="handleClick"
         :class="isBookmarked && 'cta__bookmark--bookmarked'"
        >
        <img src="../assets/icon-bookmark.svg" alt="" />
        <span> {{ isBookmarked ? 'Bookmarked' : 'Bookmark' }} </span>
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
    handleClick() { this.setBookmark(); },
    ...mapGetters(['getBookmarked']),
    ...mapActions(['setBookmark']),
  },
};
</script>

<style lang="scss" scoped>
.intro {
  background-color: var(--white);
  box-shadow: 0 0 10px 1px var(--gray);
  border-radius: var(--border-radius);
  padding: var(--bg-spacer) var(--sm-spacer);
  margin-top: -4rem;
  max-width: var(--text-width);
  position: relative;

  img {
    width: 3.5rem;
  }

  &__title {
    font-size: var(--fs-h3);
    line-height: 1;
    padding-bottom: var(--sm-spacer);
  }

  &__logo {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  &__para {
    padding-bottom: var(--bg-spacer);
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--bg-spacer);
    flex-wrap: wrap;

    &__bookmark {
      background-color: var(--gray);
      border-radius: 99em;
      text-decoration: none;
      font-weight: 700;
      font-size: calc(var(--fs-h4) - 0.2rem);

      span {
        display: none;
      }

      @media (min-width: 60em) {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        width: max-content;
        padding-right: var(--sm-spacer);
        border-radius: 99em;
        color: var(--dark-gray);
        span { display: block }
      }

      &:hover, &:hover {
        opacity: 0.7;
      }
      &--bookmarked {
        background-color: var(--moderate-cyan);
        border-radius: 50%;

        span {
          color: var(--dark-cyan);
        }

        img { mix-blend-mode: soft-light; }
        @media (min-width: 60em) {
          background-color: var(--gray);
          border-radius: 99em;

          img {
            mix-blend-mode: initial;
          }
        }
      }
    }

    .button {
      color: var(--white);
      border: 2px solid transparent;
      box-shadow: 0 0 6px 0.5px var(--gray);

      &:hover, &:focus {
        color: var(--moderate-cyan);
        border: 2px dashed;
      }
    }
  }
}
</style>
