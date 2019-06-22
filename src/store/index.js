import Vue from 'vue';
import Vuex from 'vuex';

import todoModule from './modules/todo/index.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    modules: {
        todo: todoModule
    }
});

export default store;