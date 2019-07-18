import { handleActions } from 'redux-actions'
import { ADD, REMOVE } from '../types/list'

const defaultList = [
    {
        title: '吃饭饭',
        text: '我要吃火锅'
    },
    {
        title: '打豆豆',
        text: '吃饭睡觉打豆豆'
    }
]

export default handleActions({
    [ADD](state, action) {
        state.push(action.payload)
        return {
            ...state
        }
    },
    [REMOVE](state, action) {
        state.splice(action.payload, 1)
        return {
            ...state
        }
    }
}, defaultList)