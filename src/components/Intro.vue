<template>
  <div class="intro container">
    <img class="intro__logo" src="../assets/logo-mastercraft.svg" alt="">
    <h3 class="intro__title">
      Mastercraft Bamboo Monitor Riser
    </h3>
    <p class="intro__para">
      A beautiful & handcrafted monitor stand to reduce neck and eye strain.
    </p>
    <div class="intro__cta cta">
      <Button value="Back this project" />
      <a href="#0" class="cta__bookmark">
        <img src="../assets/icon-bookmark.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import Button from '@/components/reusable/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.intro {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: var(--bg-spacer) var(--sm-spacer);
  margin-top: -4rem;
  max-width: var(--text-width);
  position: relative;

  img {
    width: 3rem;
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

    .button {
      color: var(--white);
      border: 2px solid transparent;
      box-shadow: 0 0 6px 0.5px rgba(0, 0, 0, 0.3);

      &:hover {
        color: var(--moderate-cyan);
        border: 2px solid;
      }
    }
  }
}
</style>
