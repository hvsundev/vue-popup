import Vue from 'vue';
import Vuex from 'vuex';
import { getNotice, getNoticeContents, checkLogin } from '../api/api.js'

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        notices: [],
        contents: {},
        isPassed: ''
    },
    mutations: {
        SET_NOTICES(state, notices) {
            state.notices = notices;
        },
        SET_NOTICE_CONTENTS(state, contents) {
            state.contents = contents;
        },
        SET_LOGIN_CHECK(state, isPassed) {
            state.isPassed = isPassed;
        }
    },
    actions: {
        GET_NOTICE({ commit }) {            
            getNotice()
            .then(response => {    
                commit('SET_NOTICES', response.data);
            })
        },
        GET_NOTICE_CONTENTS({ commit }, idx) {
            getNoticeContents(idx)
            .then(({ data }) => {
                commit('SET_NOTICE_CONTENTS', data);
            })
        },
        CHECK_LOGIN({ commit }, user) {
            checkLogin(user)
            .then(({ data }) => {
                commit('SET_LOGIN_CHECK', data);
            })
        }
    },
    getters: {
        
    }
})