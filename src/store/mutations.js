const ADD_ITEMNUM = 'ADD_ITEMNUM'
const SET_ANSWER = 'SET_ANSWER'
const SET_DATE = 'SET_DATE'
const CLEAR_TIME = 'CLEAR_TIME'
const INIT_ITEM = 'INIT_ITEM'

export default {
    // 点击下一题
    [ADD_ITEMNUM](state, num) {
        // state.itemNum每次自加1
        state.itemNum += num
    },
    // 存储用户选择的答案id
    [SET_ANSWER](state, id) {
        state.store_answer_id.push(id)
    },
    // 存储用户做题时间
    [SET_DATE](state, date) {
        state.timer = setInterval(() => {
            state.totalTime++
		}, 1000)
    },
    // 清除定时器
    [CLEAR_TIME](state) {
        state.timer = null
    },
    // 初始化vuex数据
    [INIT_ITEM](state) {
        state.itemNum = 1
        state.totalTime = 0
        state.store_answer_id = []
    }
}