<template>
  <div
    class="reward-edit"
    @click="handleSelect(reward.id)"
    :class="getClasses()"
  >

    <!--------------->
    <div class="reward-edit__body">
      <div class="input">
        <Radio :checked="selected == reward.id"/>
      </div>

      <div class="text">
        <h3 class="reward-edit__title">{{reward.title}}</h3>
        <p class="reward-edit__sub-title">{{reward.text}}</p>
      </div>

      <p class="reward-edit__description">{{reward.description}}</p>

      <div class="reward-edit__left"  v-show="reward.reward">
        <span class="left">{{reward.left}}</span> left
      </div>

    </div>
    <!--------------->

    <!--------------->
    <div class="pledge" v-show="selected == reward.id">
      <h3>Enter Your pledge</h3>

      <form @submit="handleSubmit">
        <div class="pledge__input">
          <input
            type="number"
            placeholder="$"
            v-model.number="amount"
            step="any"
            :min="reward.default"
            required
          />
        </div>
        <div class="pledge__button">
          <Button value="Continue" type="submit"/>
        </div>
      </form>

    </div>
    <!--------------->

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
    handleSubmit(evt) {
      evt.preventDefault();
      if (this.amount >= this.reward.default) {
        this.updateFund({ amount: this.amount, id: this.reward.id });
        this.toggleRewardModal();
        this.toggleModalSuccessModal();
        window.location = '#top';
      }
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
  box-shadow: 0 0 3px 1px var(--gray);
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  padding: var(--sm-spacer) var(--bg-spacer);
  margin-top: var(--sm-spacer);
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
    color: initial;
    &:hover {
      color: var(--moderate-cyan);
    }
  }

  &__sub-title {
    color: var(--moderate-cyan);
    font-weight: 700;
  }

  &__body {
    display: grid;
    column-gap: calc(var(--sm-spacer) * 2);
    margin-bottom: calc(var(--sm-spacer) * 0.5);
    grid-template-columns: 0fr 1fr; // ??
    grid-template-areas: "input text"
                         "para para"
                         "left left";

    @media (min-width: 50em) {
      margin-bottom: var(--sm-spacer);
      grid-template-areas: "input text left"
                           "input para para"
    }
    .input {
      grid-area: input;
    }

    .text {
      grid-area: text;
      margin-bottom: var(--sm-spacer);
      @media (min-width: 50em) {
        display: flex;
        column-gap: var(--sm-spacer);
      }
    }
    .reward-edit__description {
      grid-area: para;
    }
    .reward-edit__left {
      grid-area: left;
      padding-top: var(--sm-spacer);
      @media (min-width: 50em) {
        justify-self: flex-end;
        align-self: flex-start;
        padding-top: 0;
      }
    }
  }

  &__left {
    display: flex;
    align-items: center;
    column-gap: calc(var(--sm-spacer) / 3);
    .left {
      font-size: var(--fs-h3);
      font-weight: bold;
      color: initial;
    }
  }
}

.pledge {
  border-top: 1px solid var(--gray);
  padding-top: var(--sm-spacer);
  @media (min-width: 50em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-weight: normal;
    text-align: center;
  }

  form {
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
    padding-top: var(--sm-spacer);
    @media (min-width: 50em) {
      padding-top: 0;
    }

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
