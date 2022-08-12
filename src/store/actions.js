import ajax from '../config/ajax'

export default {
    addNum({ commit, state }, id) {
        // 判断是否点击到最后一题时
        if (state.itemNum < state.itemDetail.length) {
            commit('ADD_ITEMNUM', 1)
        }
        // 存储答案id
        commit('SET_ANSWER', id)
    },
    // 开启定时器
    recordDate({ commit }, date) {
        commit('SET_DATE', date)
    },
    // 清除定时器
    clearTimer({ commit }) {
        commit('CLEAR_TIME')
    },
    // 初始化页面，点击刷新重新更新vuex的数据，回到第一题
    initItemComponent({commit}) {
        commit('INIT_ITEM')
    }
}