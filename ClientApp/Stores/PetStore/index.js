import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutators from './mutators'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    mutators,
    actions
})

export default store