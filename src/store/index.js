import Vue from 'vue';
import Vuex from 'vuex';

import tasksModule from './modules/tasks/index.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    modules: {
        tasks: tasksModule
    }
});

export default store;