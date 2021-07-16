<template>
  <div class="radio">
    <div class="custom">
      <input type="radio" name="radio" id="radio" :checked="checked" />
      <label class="con" for="radio">
        <div class="dot"></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    value: String,
    checked: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.radio {
  input {
    display: none;
  }

  .con {
    display: block;
    width: calc(var(--bg-spacer) / 1.5);
    height: calc(var(--bg-spacer) / 1.5);
    border: 1px solid var(--gray);
    border-radius: 50%;
    position: relative;

    .dot {
      width: calc(var(--bg-spacer) / 2.5);
      height: calc(var(--bg-spacer) / 2.5);
      border: 1px solid var(--moderate-cyan);
      border-radius: 50%;
      background-color: var(--moderate-cyan);
      opacity: 0;
      transition: all 350ms ease-in;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  input:checked + .con > .dot {
    opacity: 1;
  }
}
</style>
