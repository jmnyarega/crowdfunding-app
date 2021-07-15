<template>
  <div class="project container" id="project">
    <About />
    <div
      class="rewards"
      v-for="reward in rewards"
      :key="reward.id"
    >
      <Reward :reward="reward" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import About from './About.vue';
import Reward from './Reward.vue';

export default {
  components: {
    About,
    Reward,
  },
  computed: {
    rewards() {
      return this.getRewards();
    },
  },
  methods: {
    ...mapGetters(['getRewards']),
  },
};
</script>

<style lang="scss">
.project {
  margin-top: var(--bg-spacer);
  padding: var(--bg-spacer);

  background-color: var(--white);
  box-shadow: 0 0 10px 1px var(--gray);
  border-radius: var(--border-radius);
  text-align: initial;
}
</style>
