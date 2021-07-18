<template>
  <div class="project container" id="project">
    <About />
    <Reward :reward="reward" v-for="reward in rewards" :key="reward.id" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import About from './About.vue';
import Reward from './Reward.vue';

export default {
  components: {
    About,
    Reward,
  },
  computed: {
    rewards() {
      return this.getRewards().slice(1);
    },
  },
  methods: {
    ...mapGetters(['getRewards']),
    ...mapActions(['setCurrentId']),
  },
};
</script>

<style lang="scss">
.project {
  margin-top: var(--bg-spacer);
  padding: var(--bg-spacer);

  background-color: var(--white);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  text-align: initial;
}
</style>
