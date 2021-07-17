import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
 * - SuccessModal
 * - pleadge
 */
export default new Vuex.Store({
  state: {
    isBookmark: false,
    currentId: -2,
    rewardModal: false,
    modalSuccess: false,
    menu: false,
    backed: 89914,
    backers: 5007,
    daysLeft: 56,
    target: 100000,
    rewards: [
      {
        id: 0,
        title: 'Pledge with no reward',
        text: '',
        description: `Choose to support us without a reward if you simply believe in our project.
                      As a backer, you will be signed up to receive product updates via email.`,
        left: Infinity,
        reward: false,
        default: 0,
      },
      {
        id: 1,
        title: 'Bamboo Stand',
        text: 'Pledge $200 or more',
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt,
                      and a personal thank you. You’ll be added to our Backer member
                      list. Shipping is included.`,
        left: 100,
        reward: true,
        default: 25,
      },
      {
        id: 2,
        title: 'Black Edition Stand',
        text: 'Pledge $75 or more',
        description: `You get a Black Special Edition computer stand and a personal thank you.
            You’ll be added to our Backer member list. Shipping is included.  `,
        left: 64,
        reward: true,
        default: 75,
      },
      {
        id: 3,
        title: 'Mahogany Special Edition',
        text: 'Pledge $200 or more',
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt,
        and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
        left: 0,
        reward: true,
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
    setCurrentId(state, id) {
      state.currentId = id;
    },
    setBookmark(state) {
      state.isBookmark = !state.isBookmark;
    },
    updateFund(state, obj) {
      const reward = state.rewards.find(({ id }) => id === obj.id);
      if (reward.left > 0) reward.left -= 1;
      state.backed += Number(obj.amount);
      state.backers += 1;
    },
  },
  actions: {
    toggleRewardModal(state) {
      state.commit('toggleRewardModal');
    },
    toggleModalSuccessModal(state) {
      state.commit('toggleModalSuccess');
    },
    toggleMenu(state) {
      state.commit('toggleMenu');
    },
    setCurrentId(state, id) {
      state.commit('setCurrentId', id);
    },
    setBookmark(state) {
      state.commit('setBookmark');
    },
    updateFund(state, obj) {
      state.commit('updateFund', obj);
    },
  },
  modules: {},
  getters: {
    getRewards: (state) => state.rewards,
    showRewardModal: (state) => state.rewardModal,
    showSuccessModal: (state) => state.modalSuccess,
    openMenu: (state) => state.menu,
    getCurrentId: (state) => state.currentId,
    getBookmarked: (state) => state.isBookmark,
    getStats: (state) => ({
      backed: state.backed,
      backers: state.backers,
      daysLeft: state.daysLeft,
      target: state.target,
    }),
  },
});
