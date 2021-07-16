<template>
  <div class="con">
    <div class="progress" :style="constructStyle()" />
  </div>
</template>

<script>
export default {
  name: 'Meter',
  props: {
    value: String,
  },
  methods: {
    constructStyle() {
      return `right: ${100 - Number(this.value)}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
.con {
  background-color: var(--gray);
  width: 100%;
  height: var(--sm-spacer);
  border-radius: 99em;
  position: relative;

  .progress {
    background-color: var(--moderate-cyan);
    border-radius: 99em;

    position: absolute;
    left: 0;
    height: var(--sm-spacer);
  }
}
</style>
