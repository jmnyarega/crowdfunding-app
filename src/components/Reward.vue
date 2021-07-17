<template>
  <div class="reward" :class="reward.left == 0 && 'reward--empty'">
    <div class="reward__header">
      <h3 class="reward__title">{{reward.title}}</h3>
      <p class="reward__text">{{reward.text}}</p>
    </div>
    <div class="reward__content">
      <p class="reward__description">{{reward.description}}</p>
    </div>
    <div class="reward__footer">
      <div class="reward__left">
        <span class="left">{{reward.left}}</span> left
      </div>
      <div class="reward__select">
        <Button
          :value="reward.left > 0 ? 'Select Reward' : 'Out of stock'"
          :click="handleClick"
          :clas="reward.left == 0 ? 'button--empty' : ''"
          :disabled="reward.left == 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from './reusable/Button.vue';

export default {
  props: {
    reward: Object,
  },
  components: {
    Button,
  },
  methods: {
    handleClick() {
      this.toggleRewardModal();
      this.setCurrentId(this.reward.id);
      /*
       - Looks like a hack, I am scrolling to the top on behave of the user
       - I am sure there is a better way [ to future me ] other than using the window object.
      */
      window.location.href = '#top';
    },
    ...mapActions(['toggleRewardModal', 'setCurrentId']),
  },
};
</script>

<style lang="scss">
.reward {
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

  &--empty {
    opacity: 0.5;
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
