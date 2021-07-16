<template>
  <div class="stats container">

    <div class="stat">
      <h3 class="stat__title">${{stats.backed}}</h3>
      <p class="stat__text">of $100, 000 backed</p>
    </div>

    <div class="stat">
      <h3 class="stat__title">{{stats.backers}}</h3>
      <p class="stat__text">total backers</p>
    </div>

    <div class="stat">
      <h3 class="stat__title">{{stats.daysLeft}}</h3>
      <p class="stat__text">days left</p>
    </div>

    <div class="meter">
      <Meter :value=getPercentage() />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Meter from './reusable/Meter.vue';

export default {
  name: 'Stats',
  components: {
    Meter,
  },
  computed: {
    stats() {
      return this.getStats();
    },
  },
  methods: {
    ...mapGetters(['getStats']),
    getPercentage() {
      const percentage = ((this.stats.backed / this.stats.target) * 100);
      return percentage <= 100 ? String(percentage) : '100';
    },
  },
};
</script>

<style lang="scss" scoped>
.stats {
  background-color: var(--white);
  box-shadow: 0 0 10px 1px var(--gray);
  border-radius: var(--border-radius);
  padding: var(--bg-spacer) var(--sm-spacer);
  margin-top: var(--bg-spacer);
  max-width: var(--text-width);
}
.meter {
  padding-top: var(--bg-spacer);
  width: 80%;
  margin: 0 auto;
}

.stat {
  &__title {
    font-size: calc(var(--fs-h3) + 1rem);
    line-height: 1;
    padding-bottom: calc(var(--sm-spacer) / 3);
  }

  &__text {
    font-size: calc(var(--fs-h4));
    color: var(--dark-gray);
  }
}

.stat + .stat {
  width: max-content;
  margin: 0 auto;

  border-top: 1px solid var(--gray);
  padding-top: calc(var(--bg-spacer) / 1.2);
  margin-top: calc(var(--bg-spacer) / 3);
}
</style>
