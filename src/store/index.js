import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rewardModal: false,
    modalSuccess: false,
    menu: false,
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
    toggleRewardModal(state) {
      state.rewardModal = !state.rewardModal;
    },
    toggleMenu(state) {
      state.menu = !state.menu;
    },
    toggleModalSuccess(state) {
      state.modalSuccess = !state.modalSuccess;
    },
  },
  actions: {
    toggleRewardModal(state) {
      state.commit('toggleRewardModal');
    },
    toggleMenu(state) {
      state.commit('toggleMenu');
    },
  },
  modules: {},
  getters: {
    getRewards: (state) => state.rewards,
    showRewardModal: (state) => state.rewardModal,
    showSuccessModal: (state) => state.successModal,
    openMenu: (state) => state.menu,
    getStats: (state) => ({
      backed: state.backed,
      backers: state.backers,
      daysLeft: state.daysLeft,
    }),
  },
});
