<template>
  <div class="reward-edit">
    <div class="reward-edit__header">
      <h3 class="reward-edit__title">{{reward.title}}</h3>
      <p class="reward-edit__text">{{reward.text}}</p>
    </div>
    <div class="reward-edit__content">
      <p class="reward-edit__description">{{reward.description}}</p>
    </div>
    <div class="reward-edit__footer">
      <div class="reward-edit__left">
        <span class="left">{{reward.left}}</span> left
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    reward: Object,
  },
  methods: {
    handleClick() {},
    ...mapActions(['showReward']),
  },
};
</script>

<style lang="scss">
.reward-edit {
  background-color: var(--white);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1),
              -3px -3px 6px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  padding: var(--bg-spacer);
  margin-top: var(--bg-spacer);

  &__title {
    font-size: var(--fs-h3);
    padding-bottom: calc(var(--sm-spacer) / 5);
    line-height: 1;
  }

  &__content {
    padding-bottom: var(--sm-spacer);
  }

  &__header {
    padding-bottom: var(--sm-spacer);
  }

  &__text {
    color: var(--moderate-cyan);
    font-weight: 700;
  }

  &__left {
    display: flex;
    align-items: center;
    column-gap: calc(var(--sm-spacer) / 3);
    margin-bottom: var(--sm-spacer);

    .left {
      font-size: var(--fs-h3);
      font-weight: bold;
    }
  }
}
</style>
