import Vue from 'vue';
import Vuex from 'vuex';
import { getNotice, getNoticeContents, getScrollNotice } from '../api/api.js'

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        notices: [],
        contents: {},
        isPassed: '',
        scrollNotice: []
    },
    mutations: {
        SET_NOTICES(state, notices) {
            state.notices = notices;
        },
        SET_NOTICE_CONTENTS(state, contents) {
            state.contents = contents;
        },
        SET_SCROLL_NOTICE(state, scrollNotice) {
            state.scrollNotice = scrollNotice;
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
        GET_SCROLL_NOTICE({ commit }) {
            getScrollNotice()
            .then(({ data }) => {
                commit('SET_SCROLL_NOTICE', data);
            })
        }
    },
    getters: {
        
    }
})