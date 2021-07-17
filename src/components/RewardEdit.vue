<template>
  <div
    class="reward-edit"
    @click="handleSelect(reward.id)"
    :class="getClasses()"
  >
    <div class="reward-edit__header">
      <div class="input">
        <Radio :checked="selected == reward.id"/>
      </div>
      <h3 class="reward-edit__title">{{reward.title}}</h3>
      <p class="reward-edit__text">{{reward.text}}</p>
    </div>
    <div class="reward-edit__content">
      <p class="reward-edit__description">{{reward.description}}</p>
    </div>
    <div class="reward-edit__footer" v-if="reward.reward">
      <div class="reward-edit__left">
        <span class="left">{{reward.left}}</span> left
      </div>
    </div>
    <div class="pledge" v-if="selected == reward.id">
      <h3>Enter Your pledge</h3>
      <form>
        <div class="pledge__input">
          <input
            type="number"
            placeholder="$"
            v-model="amount"
            :min="reward.default"
            step="any"
          />
        </div>
        <div class="pledge__button">
          <Button value="Continue" :click="handleSubmit"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Radio from './reusable/Radio.vue';
import Button from './reusable/Button.vue';

export default {
  components: {
    Radio,
    Button,
  },
  props: {
    reward: Object,
  },
  data() {
    return {
      amount: this.reward.default,
    };
  },
  computed: {
    selected() {
      return this.getCurrentId();
    },
  },
  methods: {
    ...mapActions([
      'setCurrentId',
      'updateFund',
      'toggleRewardModal',
      'toggleModalSuccessModal',
    ]),
    ...mapGetters(['getCurrentId']),
    handleSubmit() {
      this.updateFund({ amount: this.amount, id: this.reward.id });
      this.toggleRewardModal();
      this.toggleModalSuccessModal();
      window.location = '#top';
    },
    handleSelect(id) {
      if (this.reward.left > 0) { this.setCurrentId(id); }
    },
    getClasses() {
      let classes = '';
      classes += Number(this.selected) === this.reward.id ? 'reward-edit--selected ' : '';
      classes += this.reward.left === 0 ? 'reward-edit--empty' : '';
      return classes;
    },
  },
};
</script>

<style lang="scss">

.reward-edit {
  background-color: var(--white);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1),
              -3px -3px 6px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  padding: var(--bg-spacer);
  margin-top: var(--bg-spacer);
  cursor: pointer;

  &--selected {
    border: 2px dashed var(--moderate-cyan);
  }

  &--empty {
    opacity: 0.5;
  }

  &:not(.reward-edit--empty) {
    &:hover, &:focus-within, &:focus-visible {
      border: 2px dashed var(--dark-cyan);
    }
  }

  &__title {
    font-size: var(--fs-h4);
    padding-bottom: calc(var(--sm-spacer) / 3);
    line-height: 1;
    grid-area: b;
  }

  &__content {
    padding-bottom: var(--sm-spacer);
  }

  &__header {
    padding-bottom: var(--sm-spacer);
    max-width: 25ch;
    display: grid;
    grid-column-gap: var(--sm-spacer);
    grid-template-areas: "a b" "a c";

    .input {
      grid-area: a;
      align-self: center;
    }
  }

  &__text {
    color: var(--moderate-cyan);
    font-weight: 700;
    grid-area: c;
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

.pledge {
  border-top: 1px solid var(--gray);
  padding-top: var(--sm-spacer);
  h3 {
    font-weight: normal;
    color: var(--dark-gray);
    text-align: center;
  }

  form {
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
    padding-top: var(--sm-spacer);

    input {
      border-radius: 99em;
      width: 8rem;
      outline: none;
      border: 2px solid var(--moderate-cyan);
      padding: 0.8em 1.6em;

      &::placeholder {
        color: var(--gray);
      }
    }
  }
}
</style>
