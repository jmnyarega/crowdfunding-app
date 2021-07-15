<template>
  <div class="about">
    <h3 class="about__title">
      About this project
    </h3>
    <p class="about__text">
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
      that elevates your screen to a more comfortable viewing height. Placing your
      monitor at eye level has the potential to improve your posture and make you
      more comfortable while at work, helping you stay focused on the task at hand.
    </p>
    <p class="about__text">
      Featuring artisan craftsmanship, the simplicity of design creates extra
      desk space below your computer to allow notepads, pens, and USB sticks to
      be stored under the stand.
    </p>
  </div>
</template>

<style lang="scss">
.about {
  &__title {
    font-size: var(--fs-h3);
    line-height: 1;
    padding-bottom: var(--bg-spacer);
  }

  &__text {
    color: var(--dark-gray);
  }

  &__text + &__text {
    padding-top: var(--sm-spacer);
  }
}
</style>
