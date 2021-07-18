<template>
  <div class="success-modal container-sm" v-if="show">
    <img src="../../assets/icon-check.svg" alt="">
    <h3 class="success-modal__title">Thanks for your support!</h3>
    <p class="success-modal__text">
      Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
      You will get an email once our campaign is completed.
    </p>
    <div class="success-modal__footer">
      <Button value="Got it!" :click="handleClick" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  computed: {
    show() { return this.showSuccessModal(); },
  },
  methods: {
    handleClick() {
      this.toggleModalSuccessModal();
    },
    ...mapActions(['toggleModalSuccessModal']),
    ...mapGetters(['showSuccessModal']),
  },
};
</script>

<style lang="scss">
.success-modal {
  background-color: var(--white);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  padding: var(--bg-spacer) var(--sm-spacer);

  position: fixed;
  top: 50%;
  left:0;
  right: 0;
  z-index: 10;
  transform: translateY(-50%); // center vertically

  img {
    width: 5rem;
    margin: 0 auto;
    padding-bottom: var(--bg-spacer);
  }

  &__title {
    font-size: var(--fs-h3);
    padding-bottom: var(--sm-spacer);
    line-height: 1;
    color: initial;
  }

  &__text {
    font-size: var(--fs-h4);
    padding-bottom: var(--sm-spacer);
  }
}

.container-sm {
  max-width: calc(var(--text-width) - 10ch);
  width: 90%;
  margin: 0 auto;
}

</style>
