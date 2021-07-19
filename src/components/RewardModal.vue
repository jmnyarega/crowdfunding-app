<template>
  <div class="reward-modal container" v-if="show">
    <div class="reward-modal__header">
        <h3 class="reward-modal__title"> Back this project </h3>
        <img src="../assets/icon-close-modal.svg" alt="close - modal" @click="closeModal" />
    </div>
    <div class="reward-modal__text">
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
    </div>
    <RewardEdit
      :reward="reward"
      v-for="reward in rewards"
      :key="reward.id"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RewardEdit from './RewardEdit.vue';

export default {
  components: {
    RewardEdit,
  },
  computed: {
    rewards() {
      return this.getRewards();
    },
    show() {
      return this.showRewardModal();
    },
  },
  methods: {
    closeModal() { this.toggleRewardModal(); },
    ...mapGetters(['getRewards', 'showRewardModal']),
    ...mapActions(['toggleRewardModal']),
  },
};
</script>

<style lang="scss">
.reward-modal {
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  padding: var(--bg-spacer);
  z-index: 10;

  background-color: var(--white);
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
  border-radius: var(--border-radius);
  text-align: initial;

  &__title {
    font-size: var(--fs-h3);
    padding-bottom: calc(var(--sm-spacer) / 2);
    color: initial;
  }

  &__header {
    display: flex;
    align-items: center;
  }

  img {
    cursor: pointer;
    margin-left: auto;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
