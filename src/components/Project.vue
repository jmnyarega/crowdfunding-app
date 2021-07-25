<template>
  <div class="project container" id="project">
    <about />
    <reward :reward="reward" v-for="reward of rewards" :key="reward.id" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import about from './About.vue';
import reward from './Reward.vue';

export default {
  components: {
    about,
    reward,
  },
  computed: {
    rewards: {
      get() {
        return this.getRewards().slice(1);
      },
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
  margin: var(--sm-spacer) 0 var(--bg-spacer) 0;
  padding: var(--bg-spacer);

  background-color: var(--white);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  text-align: initial;
}
</style>
