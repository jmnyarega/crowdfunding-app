<template>
  <div class="success-modal container" v-if="show">
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
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1),
              -3px -3px 6px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  padding: var(--bg-spacer);

  position: fixed;
  top: 50%;
  left:0;
  right: 0;
  z-index: 10;
  transform: translateY(-50%);

  img {
    width: 5rem;
    margin: 0 auto;
    padding-bottom: calc(var(--bg-spacer));
  }

  &__title {
    font-size: var(--fs-h3);
    padding-bottom: calc(var(--bg-spacer));
    line-height: 1;
  }

  &__text {
    font-size: var(--fs-h4);
    padding-bottom: calc(var(--bg-spacer));
  }

}
</style>
