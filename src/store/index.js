import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
    backed: 89914,
    backers: 5007,
    daysLeft: 56,
    rewards: [
      {
        title: 'Bamboo Stand',
        text: 'Pledge $200 or more',
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt,
                      and a personal thank you. You’ll be added to our Backer member
                      list. Shipping is included.`,
        left: 100,
        default: 25,
      },
      {
        title: 'Black Edition Stand',
        text: 'Pledge $75 or more',
        description: `You get a Black Special Edition computer stand and a personal thank you.
            You’ll be added to our Backer member list. Shipping is included.  `,
        left: 64,
        default: 75,
      },
      {
        title: 'Mahogany Special Edition',
        text: 'Pledge $200 or more',
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt,
        and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
        left: 0,
        default: 200,
      },
    ],
  },
  mutations: {
    toggle(state) {
      state.show = !state.show;
    },
  },
  actions: {
    showReward(state) {
      state.commit('toggle');
    },
  },
  modules: {},
  getters: {
    getRewards: (state) => state.rewards,
    showModal: (state) => state.show,
    getStats: (state) => ({
      backed: state.backed,
      backers: state.backers,
      daysLeft: state.daysLeft,
    }),
  },
});
